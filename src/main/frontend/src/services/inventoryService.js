import axios from "axios";

const MEDICINE_API_BASE_URL = "/api/api/v1/medicines";

class InventoryService {

    getMedicines(){
        return axios.get(MEDICINE_API_BASE_URL);
    }

    createMedicine(medicine){
        return axios.post(MEDICINE_API_BASE_URL + '/create',medicine);
    }

}

export default new InventoryService()