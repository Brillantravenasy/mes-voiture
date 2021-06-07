import React, { Component } from 'react'
import userService from "../../services/userService.js";

class SignUserComponent extends Component {
    constructor(props){
        super(props);
        this.onChangePseudo = this.onChangePseudo.bind(this);
        this.onChangeAdress = this.onChangeAdress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.saveUser = this.saveUser.bind(this);

        this.state = {
            id: null,
            pseudo: "",
            email: "",
            password: "",
            error: false,
            
        }
    }

    onChangePseudo(e){
        this.setState({
            pseudo: e.target.value
        })
    }

    onChangeAdress(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    saveUser() {
        var userData = {
            pseudo: this.state.pseudo,
            email: this.state.email,
            password: this.state.password
        }

       return  userService.signup(userData)
            .then(response => {
               this.props.history.push('/login');
                
            })
            .catch(e => {
                this.setState({
                    error: true
                })
            })
    }





    render() {
        return (
            <div className="form-add-car">
                <div className = "col-sm-8 mt-4 form">
                    <h5>Inscription</h5>

                            {this.state.error ? (
                            
                                <div class="alert alert-danger" role="alert">
                                  Erreur de l'inscription (mail ou pseudo dejà prise)
                                </div>
                             ):(<p></p>)
                            }
                      
                            <div className="form-group my-4">
                                <label for="pseudo" className="my-1">Pseudo</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="pseudo" 
                                    placeholder="votre pseudo"
                                    required
                                    value={this.state.pseudo}
                                    onChange={this.onChangePseudo}
                                    name="pseudo"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label for="mail" className="my-1">Adresse email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="mail" 
                                    aria-describedby="emailHelp" 
                                    placeholder="votre adress email"
                                    required
                                    value={this.state.email}
                                    onChange={this.onChangeAdress}
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
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    name="email"
                                />
                            </div>
                            <button onClick={this.saveUser}  className="btn btn-primary">
                                Enregistrer
                            </button>
                    

                </div>
           
             </div>      


        )
    }
}

export default SignUserComponent