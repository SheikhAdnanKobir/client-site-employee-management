import React from 'react';
import { Navigate, useLocation } from "react-router-dom"
import useAuth from '../../Hooks/useAuth';
import UseAdmin from '../../Hooks/UseAdmin';
import { useLocation } from 'react-router';
import { Mosaic } from 'react-loading-indicators';

const AdminRout = () => {

    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Mosaic color={["#990000", "#cc0000", "#ff0000", "#ff3333"]} />
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRout;