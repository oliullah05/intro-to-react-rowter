import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const data = useLoaderData();
    const {id,title,body}=data;
    // console.log(data);
    const callNavigate = useNavigate();
    const OneLevelBAck=()=>{
        callNavigate(-1)
    }
    return (
        <div>
            <h1>id:{id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={OneLevelBAck}>GO Back</button>
        </div>
    );
};

export default PostDetails;