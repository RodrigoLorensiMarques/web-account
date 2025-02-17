import axios from 'axios'


const API_URL = "http://localhost:5200/User/login" 

export const loginApi = async (name,password) => {
    try {
        const response = await axios.post(API_URL, {
            name,
            password,
        });
        console.log("log:",response);
        return response.data;

    } catch (error) {
        console.log(error);
        if (error.message) {
            console.log("Error.message")
            return error.response;
        }

    }
};


