import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const friends = useLoaderData()
    // console.log(friends);
    return (
        <div>
            <h1>This are my friends :{friends.length}</h1>
            {
               friends.map(friend=><Friend friend={friend}></Friend>)
            }
            
        </div>
    );
};

export default Friends;