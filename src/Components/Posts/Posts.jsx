import React from 'react';
import { useLoaderData} from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const data = useLoaderData();
   
    return (
        <div>
            <h1>Total Posts :{data.length} </h1>
            {
data.map(post=><Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;