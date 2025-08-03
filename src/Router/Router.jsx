import { createBrowserRouter } from "react-router";
import Home from '../Component/HandelLayout/Body/Home/Home';
import Handellayout from '../Component/HandelLayout/Handellayout';
import Dashboard from '../Component/HandelLayout/Body/Dashboard/Dashboard';
import Contact from '../Component/HandelLayout/Body/Contact/Contact';

import 'flowbite';
import Handelath from '../Component/HandelLayout/Body/Authentication/Handelath';
import 'flowbite';
import PageError from "../PageError";


const Router = createBrowserRouter([
    {
        path: "/",
        Component: Handellayout,
        errorElement: <PageError />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "dashboard",
                Component: Dashboard,
                children: [
                    
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