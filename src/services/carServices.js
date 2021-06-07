import axios from 'axios';
import authHeader from './authHeader';

const CAR_API_BASE_URL = "http://localhost:4500/api/car";

class CarService {

    getCars(){
        return axios.get(CAR_API_BASE_URL);
    }

    createCar(car){
        return axios.post(CAR_API_BASE_URL, car, { headers: authHeader() });
    }

    getCarById(carId){
        return axios.get(CAR_API_BASE_URL + '/' + carId);
    }

    updateCar(carId, car){
        return axios.put(CAR_API_BASE_URL + '/' + carId, car, { headers: authHeader() });
    }

    deleteCar(carId){
        return axios.delete(CAR_API_BASE_URL + '/' + carId, { headers: authHeader() });
    }
}

export default new CarService()