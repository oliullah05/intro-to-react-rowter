import React from 'react';
import {Link} from "react-router-dom"

const Friend = ({friend}) => {
    const {name,phone,id}=friend;
    // console.log(friend);
    return (
        <div>
          <h1> name : {name}</h1>
           <p>phone :{phone}</p>
         <p> <Link to={`/friend/${id}`}>More details</Link></p>
        </div>
    );
};

export default Friend;