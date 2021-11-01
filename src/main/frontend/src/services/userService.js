import axios from "axios";

const USER_API_BASE_URL = "/api/api/v1/users";

const USER_API_BASE_URL_LOGIN = "/api/api/v1/login";

class UserService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId) {
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    loginUser(user) {
        return axios.post(USER_API_BASE_URL_LOGIN, user);
    }
}

export default new UserService()