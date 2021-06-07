import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const HeaderComponent = () => {
        const [isLoginIn, setIsLoginIn] = useState(false);
        const { user: currentUser } = useSelector((state) => state.auth);
        const dispatch = useDispatch();

        useEffect(() => {
            if (currentUser) {
                setIsLoginIn(currentUser !== null);
            }
          }, [currentUser]);


        const logOut = () => {
            dispatch(logout());
        };
        return (
            <div>
                <header className="fixed-top">
                    <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Les voitures</a>
                 
                     
                            {
                                !isLoginIn  && (
                                           
                                     <form className="d-flex">
                                        <a className="btn btn-outline-success mx-4" href="/login" >Connection</a>
                                        <a className="btn btn-outline-primary" href="sign"  >Inscription</a>
                                    </form>
                                )
                            }
                           
                            {
                                isLoginIn  && (
                                    <div className="d-flex">
                                        <a className="btn btn-outline-primary mx-4" href="/add_car" >ajout Voiture</a>
                                        <button className="btn btn-outline-primary" onClick={logOut}  >Déconnection</button>
                                    </div>

                                )
                            }
                          
                  
                         
                    </div>
                    </nav>
                </header>
            </div>
        )
    
}



export default HeaderComponent