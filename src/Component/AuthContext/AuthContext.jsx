import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import {  createContext, useEffect, useState } from 'react';
import { auth } from '../../Firebase.init';
import Swal from 'sweetalert2';
import PublicAxios from '../Hooks/PublicAxios';

export const authContextProvider = createContext(null);

const AuthContext = ({ children }) => {

    // add dependency
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [nav, setNav] = useState(null);

    const publicAxiosurl = PublicAxios();


    const provider = new GoogleAuthProvider();


    const signUpWithEmailPassword = (email, password, name, photoURL) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL


                })
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
                        console.log('Profile updated successfully');
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        if (errorCode || errorMessage) {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-end",
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
                                title: "Something has gone wrong"
                            });
                        }
                    })
            })
    };

    // sign in with email and password
    const signInEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
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
                    .then(() => {
                        console.log('User signed in successfully');
                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if (errorCode || errorMessage) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setUser(null)
            }

            if (user?.email) {
                const currentUser = { email: user.email }
                console.log(currentUser);

                // console.log(currentUser);
                publicAxiosurl.post('/jwt', currentUser)
                    .then(res => {
                        console.log(res.data);
                        // localStorage.setItem("accessToken", res.data.token)
                    })
                    .catch(err => {
                        console.error("JWT fetch failed", err);
                    });
            }
            else {
                publicAxiosurl.post("/logout", {}, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                        // localStorage.removeItem("accessToken")
                    })
            }


        });
        return () => {
            unsubscribe()
        }
    }, [])



    // handle sign out
    const handleSignOut = () => {
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

        return auth.signOut()
            .then(() => {
                console.log('Sign-out successful.');
            })
            .catch((error) => {
                console.error('Sign-out error:', error);
            });
    }

    // sign in with google
    // handle google sign in 
    const singInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                publicAxiosurl.post("/jwt", { email: user?.email });
                console.log(provider);
                console.log(auth, user);
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
        nav, setNav
    };

    console.log(nav, "nav in auth context");
    

    return (
        <div>
            <authContextProvider.Provider value={routing}>
                {children}
            </authContextProvider.Provider>

        </div>
    );
};

export default AuthContext;