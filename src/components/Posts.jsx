import React from 'react'


function Posts({props}) {
  
    return (
        <div key={props._id} className="post">
           
            <div className="card">
            <img className="img-post" src={props.img} alt=""/>
            <h2>{props.title}</h2>
            <p className="date">Postado em {props.createdAt}</p>
            <p>{props.content}</p>
            <div className="hr"></div>
            </div>
       
            
            
        </div>
    )
}

export default Posts
