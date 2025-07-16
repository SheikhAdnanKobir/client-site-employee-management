import React, { useContext } from 'react';
import { AuthContextProvider } from '../AuthContext/AuthContext';

const useAuth = () => {
    
    const auth= useContext(AuthContextProvider);

    return auth;
};

export default useAuth;