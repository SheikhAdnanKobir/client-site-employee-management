import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase.init.js';
import Swal from 'sweetalert2';
import PublicAxios from '../Hooks/PublicAxios';

export const AuthContextProvider = createContext(null)

const AuthContext = ({ children }) => {

    // add dependency
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [nav, setNav] = useState(null);

    const [mobileSize, setMobileSize] = useState(false);

    const publicAxiosUrl = PublicAxios();


    const provider = new GoogleAuthProvider();


    const signUpWithEmailPassword = async (email, password, name, photoUrl, role, designation) => {
        // console.log("Sign Up:", email, "Sign Up:", password, "Sign Up:", auth);

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            const user = result.user;
            // console.log(user);

            await updateProfile(user, {
                displayName: name,
                photoURL: photoUrl
            })

            // console.log(user);
            const addUser = {
                email: email,
                password: password,
                name: name,
                photo: photoUrl,
                role: role,
                designation: designation,
                admin: false,
                isVerified: false,
                bank_account_no: "",
            }
            await publicAxiosUrl.post("/users", addUser);


            // // console.log(userRes.data);
            // if (userRes.data.insertedId) {
            //     // reset()
            // }

            // React toastify
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Signed Up successfully!!"
            })
                .then(() => {
                    console.log('User signed up successfully');
                });


        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.code, "this is tooo", errorMessage);
            if (errorCode || errorMessage) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "E-mail already exists !"
                });
            }
        }
    };

    // sign in with email and password
    const signInEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // const user = result.user;
                // console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Signed In successfully!!"
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "E-mail or password are not match !"
                    });
                }
            })
    }


    // set observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                publicAxiosUrl.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false)
            }

        });
        return () => {
            unsubscribe()
        }
    }, [])



    // handle sign out
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                console.log('Sign-out successful.');
                // Sign-out successful.
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "warning",
                    title: "Signed Out successfully"
                });
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "Sign-out failed"
                });
            });
    }

    // sign in with google
    // handle google sign in 
    const singInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                // console.log(provider);
                // console.log(auth.currentUser, "this is provider", provider, "this is user", user);
                const email = auth.currentUser.email;
                publicAxiosUrl.get(`/users/check-email/${email}`)
                    .then(res => {
                        // console.log(res.data.exists, "this is email check response");
                        if (!res.data.exists) {
                            const user = auth.currentUser;
                            const addUser = {
                                email: user.email,
                                password: "This is google sign in",
                                name: user.displayName,
                                photo: user.photoURL,
                                role: "employee",
                                designation: "",
                                admin: false,
                                isVerified: false,
                                bank_account_no: ""
                            }
                            publicAxiosUrl.post("/users", addUser)
                        }
                    })

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Successfully Google login"
                });


            })
            .catch((error) => {
                if (error.errorCode || error.errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "error",
                        title: "Something Google sign in problem!"

                    });
                }
                console.log("hi error", error);
                console.log(error);


            });
    }

    const routing = {
        user,
        loading,
        signUpWithEmailPassword,
        singInGoogle,
        signInEmailAndPassword,
        handleSignOut,
        nav, setNav,
        mobileSize, setMobileSize
    };

    // console.log(nav, "nav in auth context");


    return (
        <div>
            <AuthContextProvider.Provider value={routing}>
                {children}
            </AuthContextProvider.Provider>

        </div>
    );
};

export default AuthContext;