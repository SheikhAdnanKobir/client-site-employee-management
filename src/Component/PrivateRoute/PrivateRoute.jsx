import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Atom } from 'react-loading-indicators';

const PrivateRoute = ({children}) => {

    const {user,loading}=useAuth();

    if(loading){
        <div>
            <Atom color={["#488500", "#64b800", "#80eb00", "#99ff0a"]} />
        </div>
    }

    return
};

export default PrivateRoute;