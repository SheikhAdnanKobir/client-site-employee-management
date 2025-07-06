import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../../Firebase.init';
import Swal from 'sweetalert2';

export const AuthContextProvider = createContext(null)

const AuthContext = ({ children }) => {

    // add dependency
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

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
                AxiosSecureUse.post('/jwt', currentUser)
                    .then(res => {
                        console.log(res.data);
                        // localStorage.setItem("accessToken", res.data.token)
                    })
                    .catch(err => {
                        console.error("JWT fetch failed", err);
                    });
            }
            else {
                AxiosSecureUse.post("/logout", {}, {
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





    return (
        <div>

        </div>
    );
};

export default AuthContext;