import React from 'react'
import ContentCommentComponent from './ContentCommentComponent';
import FormCommentComponent from './FormCommentComponent';


const ListCommentComponent = (props) => {
    const car = props.car

    return (
        <div className="mt-4">
            <div>
                <FormCommentComponent car={car}></FormCommentComponent>
            </div>
            
            <div className="list-comment">
           
                {
                    car.comments && car.comments.map(comment => 
                        <ContentCommentComponent comment={comment}></ContentCommentComponent>
                    )
                }
               
            </div>
     

        
        </div>
     
  
    )
}


export default ListCommentComponent

