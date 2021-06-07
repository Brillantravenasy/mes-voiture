import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:4500/api/auth";

class UserService {


    login(user){
        return axios.post(USER_API_BASE_URL + '/login' , user)
        .then((response) => {
            if(response.data.token){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
    }

    signup(user){
        return axios.post(USER_API_BASE_URL + '/signup' , user);
    }

    logout(){
  
        localStorage.removeItem("user");
        window.location.reload();
    }


}

export default new UserService()