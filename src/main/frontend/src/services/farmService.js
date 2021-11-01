import axios from "axios";

const FARM_API_BASE_URL = "/api/api/v1/farms";

class FarmService {

    getFarms(){
        return axios.get(FARM_API_BASE_URL);
    }

    createFarm(userId,farm){
        return axios.post(FARM_API_BASE_URL + '/create/' + userId, farm);
    }

}

export default new FarmService()