import React from "react";
import { useSelector } from "react-redux";

const CarComponent = (props) => {
    const data = props.data;
    const { user: currentUser } = useSelector((state) => state.auth);
      return (
            <div class="mt-4 col-sm-3">
            <div class="card">
                <img src={data.imageUrl} class="card-img-top"  height="250px" alt="..."/>
                <div class="card-body">
                    <h4 class="card-title">{data.marque}</h4>
                    <h5 class="card-title"> {data.category}</h5>
                    <p class="card-text"><small class="text-muted">{data.price}$</small></p>
                    <b class="card-text " ><small class="text-muted">{data.userPseudo}</small></b>
                    <p class="card-text description">{data.description}.</p>
                    {
                        currentUser && (
                            <a href={"/detail/" + data._id} class="btn btn-primary">Voir commentaire({data.comments.length})</a>
                        )
                    }
                 
                </div>
            </div>
        </div>      
      )

}


export default CarComponent