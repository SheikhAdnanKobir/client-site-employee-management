import React from 'react';
import useAuth from './useAuth';
import Axiossecure from './Axiossecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {

    const {user,loading}=useAuth();
    const axiosSecureUrl=Axiossecure();

    const {data: isAdmin , isPending: adminLoading}=useQuery({
        queryKey:[user?.email,isAdmin],
        enabled:!loading,
        queryFn:async ()=>{
            const res=await axiosSecureUrl.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })

    return [isAdmin,adminLoading]
};

export default UseAdmin;