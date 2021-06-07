import React, { Component } from 'react'

const ContentCommentComponent = (props) =>  {


        return (
              <div>
                <p><b>{props.comment.userPseudo}</b></p>
                <p className="mx-4">{props.comment.contenu}</p>
             </div>      

        )
    
}

export default ContentCommentComponent