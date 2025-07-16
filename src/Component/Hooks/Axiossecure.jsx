import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

const Axiossecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();


    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async(error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate("/authentication");
            // console.error("Unauthorized access or forbidden request.");
        }
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default Axiossecure;