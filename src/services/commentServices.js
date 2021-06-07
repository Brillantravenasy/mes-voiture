import axios from 'axios';
import authHeader from './authHeader';

const COMMENT_API_BASE_URL = "http://localhost:4500/api/comment";

class commentServices {


    createComment(comment){
        return axios.post(COMMENT_API_BASE_URL, comment, { headers: authHeader() });
    }

    getCommentByCar(carId){
        return axios.get(COMMENT_API_BASE_URL + '/' + carId, { headers: authHeader() });
    }


}

export default new commentServices()