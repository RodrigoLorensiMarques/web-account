import axios from 'axios'


const API_URL = "http://localhost:5200/User/login" 

export const loginApi = async (name,password) => {
    try {
        const response = await axios.post(API_URL, {
            name,
            password,
        });
        return response;

    } catch (error) {

        if (error.message) {
            return error.response;
        }

    }
};


