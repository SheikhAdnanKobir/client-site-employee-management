import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Component/HandelLayout/Body/Home/Home';
import Handellayout from '../Component/HandelLayout/Handellayout';
import Dashboard from '../Component/HandelLayout/Body/Dashboard/Dashboard';
import Contact from '../Component/HandelLayout/Body/Contact/Contact';
import Employee from '../Component/HandelLayout/Body/Dashboard/Employee/Employee';
import Admin from '../Component/HandelLayout/Body/Dashboard/Admin/Admin';
import Hr from '../Component/HandelLayout/Body/Dashboard/Hr/Hr';
import 'flowbite';
import Signin from '../Component/HandelLayout/Body/Authentication/Signup';
import Login from '../Component/HandelLayout/Body/Authentication/Login';
import Handelath from '../Component/HandelLayout/Body/Authentication/Handelath';


const Router = createBrowserRouter([
    {
        path: "/",
        Component: Handellayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "dashboard",
                Component: Dashboard,
                children: [
                    {
                        path: "admin",
                        Component: Admin
                    },
                    {
                        path: "hr",
                        Component: Hr
                    },
                    {
                        path: "employee",
                        Component: Employee
                    },
                ]
            },
            {
                path: "contact",
                Component: Contact

            }

        ]
    },
    {
        path: "/authentication",
        Component: Handelath
    }
]);

export default Router;