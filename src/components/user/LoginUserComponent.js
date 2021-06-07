import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../../actions/auth";

const Login = (props) => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const onChangeMail = (e) => {
            setMail(e.target.value);
      };
    
      const onChangePassword = (e) => {
            setPassword(e.target.value);
      };

      const  loginUser = () => {
        var userData = {
           email: mail,
           password: password
       }

       dispatch(login(userData))
           .then(() => {
               props.history.push("/");
           })
            .catch(e => {
                setError(true)
           })

   }

   if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="form-add-car">
        <div className = "col-sm-8 mt-4 form">
            <h5>Connection à votre compte</h5>
                   {error && (
                    
                        <div class="alert alert-danger" role="alert">
                          votre adresse et/ou mot passe sont incorrect)
                        </div>
                     )}
      
                    <div className="form-group my-4">
                        <label for="mail" className="my-1">Adresse email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="mail" 
                            aria-describedby="emailHelp" 
                            placeholder="votre adress email"
                            required
                            value={mail}
                            onChange={onChangeMail}
                            name="email"
                        />
                    </div>
                    <div className="form-group my-4">
                        <label for="password" className="my-1">Mot de passe</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="votre mot de passe"
                            required
                            value={password}
                            onChange={onChangePassword}
                            name="email"
                        />
                    </div>
                    <button onClick={loginUser}  className="btn btn-primary">
                        Connection
                    </button>
                 

        </div>
   
     </div>      


)


};
export default Login;