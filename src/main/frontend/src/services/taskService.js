import axios from "axios";

const TASK_API_BASE_URL = "/api/api/v1/tasks";


class TaskService {

    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    }

    createTasks(userId,task) {
        return axios.post(TASK_API_BASE_URL + '/create/' + userId, task);
    }
}

export default new TaskService()