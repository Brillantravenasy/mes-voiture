import React from 'react'
import ContentCommentComponent from './ContentCommentComponent';
import FormCommentComponent from './FormCommentComponent';
import { useSelector } from "react-redux";


const ListCommentComponent = (props) => {
    const car = props.car
    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <div className="mt-4">
            
            <div>
                <FormCommentComponent car={car}></FormCommentComponent>
            </div>
            
            <div className="list-comment">
           
                {
                    currentUser && car.comments && car.comments.map(comment => 
                        <ContentCommentComponent comment={comment}></ContentCommentComponent>
                    )
                }
               
            </div>
     

        
        </div>
     
  
    )
}


export default ListCommentComponent

