import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './Components/Header/Nav';
import About from './Components/About/About';
import Contract from './Components/Contract/Contract';
import Friends from './Components/Friends/Friends';
import FriendsDetails from './Components/Friends/FriendsDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/Posts/PostDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App> ,
    children:[
      // {
     
      //  path:"/",
      //  element: <Nav></Nav>
      // },
      {
       path:"posts",
       element: <Posts></Posts>,
       loader:()=>fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
       path:"post/:postId",
       element: <PostDetails></PostDetails>,
       loader:(params)=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.params.postId}`)
      //  
      },
      {
       path:"friends",
       element: <Friends/>,
       loader:()=>fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
       path:"friend/:friendId",
       element: <FriendsDetails></FriendsDetails>,
       loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
         //  
      },
      {
       path:"about",
       element: <About/>
      },
      {
       path:"contract",
       element: <Contract/>
      },
      {
       path:"about",
       element: <h1>asughdjkasjhudm</h1>
      },
    ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
