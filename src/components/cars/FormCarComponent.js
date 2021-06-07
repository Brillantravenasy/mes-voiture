import React, { useState } from "react";
import {  useSelector } from "react-redux";
import carService  from "../../services/carServices";
import { Redirect } from 'react-router-dom';


const FormCarComponent = (props) => {

    const { user: currentUser } = useSelector((state) => state.auth);
    const [marque, setMarque] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserId] = useState(currentUser.userId);
    const [userPseudo, setUserPseudo] = useState(currentUser.userPseudo);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState({});
    
    const onChangeMarque = (e) => {
        setMarque(e.target.value)
    }

    const onChangeCategory = (e) => {
        setCategory(e.target.value)
    }

    const onChangeDescription= (e) => {
        setDescription(e.target.value)
    }

    const onChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onChangeImage = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const createCar = () => {
        let data = new FormData();
        data.append('image', image);
        data.append('userId', userId);
        data.append('userPseudo', userPseudo);
        data.append('marque', marque);
        data.append('category', category);
        data.append('description', description);
        data.append('price', price);

        carService.createCar(data)
        .then(response => {
            props.history.push("/");
        })

        .catch(err => {
            console.log(err)
        });
   
    }


        if (!currentUser) {
           return <Redirect to="/login" />;
        }

        return (
              <div className="form-add-car">
                  <div className = "col-sm-8 mt-4 form">
                      <h5>Ajout nouveau voiture</h5>
                    
                            <div className="form-group my-4">
                                <label for="marque" className="my-1">Marque</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="marque" 
                                    placeholder="marque de votre voiture"
                                    required
                                    value={marque}
                                    onChange={onChangeMarque}
                                    name="marque"
                                />
                            </div>
                            <div className="form-group my-4">
                                <label for="exampleFormControlInput1" className="my-1">Categorie</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="categorie" 
                                    placeholder="Categorie de votre voiture"
                                    required
                                    value={category}
                                    onChange={onChangeCategory}
                                    name="category"
                                />
                            </div>

                            <div className="form-group my-4">
                                <label for="exampleFormControlInput1" className="my-1">Prix($)</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="prix de votre voiture"
                                    value={price}
                                    onChange={onChangePrice}
                                    name="price"
                                />
                            </div>

                            <div className="form-group my-4">
                                <label for="exampleFormControlTextarea1" className="my-1" >Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    value={description}
                                    onChange={onChangeDescription}
                                    name="description"
                                
                                >
                                    
                                </textarea>
                            </div>
                            <div className="form-group my-4">
                                <label for="exampleFormControlFile1" className="my-1">Image</label>
                                <input 
                                     type="file"
                                     className="form-control" 
                                     id="exampleFormControlFile1"
                                  
                                     onChange={onChangeImage}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={createCar}>Enregistrer</button>
                      
                  </div>
           
                </div>      

        )
    }


export default FormCarComponent