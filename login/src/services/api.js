import axios from 'axios'


const API_URL = "http://localhost:5200/User/" 

export const loginApi = async (name,password) => {
    try {
        const response = await axios.post(API_URL+"login", {
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


export const registerUser = async (dados) => {
    try {
        const response = await axios.post(API_URL + "customer", dados);

        return response;

    } catch (error) {
        return error.response;
    }
}



