import axios from 'axios';

const publicAxiosUse = axios.create({
    baseURL:"http://localhost:5000"
})

const PublicAxios = () => {
    return publicAxiosUse;
};

export default PublicAxios;