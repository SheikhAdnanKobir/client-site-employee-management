import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div>
                <h1>Employee Management System Portal</h1>
                <p>Welcome to the Employee Management System Portal. Here you can manage employee records,  view details, and perform various administrative tasks.</p>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;