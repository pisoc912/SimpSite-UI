import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL + '/auth/';

class AuthService {
    register(username, email, password, role) {
        return axios.post(API_BASE_URL + 'signup', {
            username,
            email,
            password,
            role
        });
    }

    async login(username, password) {
        const response = await axios.post(API_BASE_URL + 'login', {
            username,
            password
        });
        console.log(response);
        console.log(response.data);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export default new AuthService();