import React, { useState } from "react";
import {  useSelector } from "react-redux";
import commentService  from "../../services/commentService"
import { Redirect } from 'react-router-dom';


const FormCommentComponent = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const [contenu, setContenu] = useState("");

    const onChangeContenu = (e) => {
        setContenu(e.target.value)
    }

    const createComment = () => {
        let data = {
            contenu: contenu,
            userid : currentUser.userId,
            userPseudo : currentUser.userPseudo,
            carid: props.car._id
        }
        
        commentService.createComment(data)
        .then(function(reponse){
            window.location.reload()
        
          
        })

        .catch(function(error){
            console.log(error)
        })
    }


    return (
        <div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Votre commentaire</label>
                <textarea 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    value={contenu}
                    onChange={onChangeContenu}
                    name="contenu"
                                
                />
            </div>  
            <button className="btn btn-primary btn-sendComment" onClick={createComment}>envoyer</button>
        </div>  

    )

}

export default FormCommentComponent