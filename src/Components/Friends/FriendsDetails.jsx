import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const data=useLoaderData();
    const {name,email}=data
    console.log(data);
    return (
        <div>
            <h3>name :${email} </h3>
        </div>
    );
};

export default FriendsDetails;