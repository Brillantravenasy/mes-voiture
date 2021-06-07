import React, { Component } from 'react'
import SlideComponent from './SlideComponent';
import ListComponent from '../cars/ListCarComponent';
import DetailCarComponent from '../cars/DetailCarComponent';
import FormCarComponent from '../cars/FormCarComponent';
import LoginUserComponent from '../user/LoginUserComponent';
import SignUserComponent from '../user/SignUserComponent';
import ProfilUserComponent from '../user/ProfilUserComponent';
import {BrowserRouter as Router, Route } from 'react-router-dom'

class ContainerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="container">
                    <div>
                         <SlideComponent></SlideComponent>
                         <Router>
                        
                                    <Route exact path="/" component={ListComponent} />  
                                    <Route exact path="/detail/:carId" render={(props) => <DetailCarComponent carId={props} /> } /> 
                                    <Route exact path="/add_car" component={FormCarComponent} />  
                                    <Route exact path="/login" component={LoginUserComponent} /> 
                                    <Route exact path="/sign" component={SignUserComponent} /> 
                                    <Route exact path="/profile" component={ProfilUserComponent} /> 
                        </Router>
                    </div>
            </div>
        )
    }
}

export default ContainerComponent