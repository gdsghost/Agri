import axios from "axios";

const TREATMENT_API_BASE_URL = "/api/api/v1/treatments";

class TreatmentService {

    getTreatments(){
        return axios.get(TREATMENT_API_BASE_URL);
    }

    createTreatment(userId,treatment){
        return axios.post(TREATMENT_API_BASE_URL + '/create/' + userId, treatment);
    }

}

export default new TreatmentService()