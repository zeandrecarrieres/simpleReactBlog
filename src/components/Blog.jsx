import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from "./Posts"
import Header from './Header'

function Blog() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/posts')
        .then((response)=>{
            setPosts(response.data)
        })

    },[])

   
    return (
        <>
        <Header />
        <div className="blog">
            {posts.map((post)=>
                <Posts props={post}/>
            )}
        </div>
        </>
    )
}
export default Blog
