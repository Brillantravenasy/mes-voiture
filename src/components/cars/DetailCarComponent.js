import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import ListCommentComponent from '../comment/ListCommentComponent';
import servicesCar from '../../services/carServices';

const DetailCarComponent = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const id = props.carId.match.params.carId;  
    const [car, setCar] = useState(null);

    useEffect(() => {
        servicesCar.getCarById(id).then(x => setCar(x.data));
    },[]);

      return (
        <div class="row">
                    {
                        car && (
                        <div class = "col-sm-6">
      
                            <div class="card-body">

                            <h5 class="card-title">{car.marque} - {car.category}</h5>
                            <p class="card-text">{car.description}.</p>
                            <p class="card-text"><small class="text-muted">{car.price}$</small></p>
                            <b class="card-text"><small class="text-muted">{car.userPseudo}</small></b>
                        </div>
                                    <img src={car.imageUrl} class="card-img-bottom" alt="..."/>
                  

                        </div>
                      )
                    }
                {
                   car && (
                        <div class = "col-sm-6">
                            <ListCommentComponent car={car}></ListCommentComponent>
                    </div>
                    )
               }
        </div>

    )
}


export default DetailCarComponent