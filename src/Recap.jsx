import { useEffect, useState } from "react"
import './Recap.css'
import Post from "./Post"
export default function ShowsPost(){
    const [posts,setPost]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
       return(
        <div className="box">
        <h3>welcome</h3>
        <h5>posts : {posts.length}</h5> 
        {
          posts.map(post=><Post post={post}></Post>)
        } 
           
        </div>
       )
}