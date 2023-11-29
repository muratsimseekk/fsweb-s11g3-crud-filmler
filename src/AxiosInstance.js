import axios from "axios";

export const createAxiosInstance = () =>{
    axios.create({
        baseURL: 'http://localhost:9000/api/movies',
    })
};

export let AxiosInstance;

export const renewAxiosInstance = () => {
    AxiosInstance = createAxiosInstance();
}

renewAxiosInstance();
