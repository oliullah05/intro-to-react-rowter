import React from 'react';
import {Link, useNavigate} from "react-router-dom"
const Post = ({post}) => {
    const {id,body,title}=post;
    // console.log(post);



    const navigate = useNavigate();
    const OnClickNavigate =()=>{
         navigate(`/post/${id}`)
    }
    return (
        <div className='m-5 shadow-lg bg-gray-300 p-5 font-semibold'>
            <h4 className='p-2'>Post no:{id}</h4>
            <p className='p-2'>{title}</p>
            <p className='p-2'>{body}</p>
            <p><Link to={`/post/${id}`}>Post Details</Link></p>
            <button onClick={OnClickNavigate}>Use Navigate</button>
        </div>
    );
};

export default Post;