import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';

const PostPage = () => {
    const {posts, handleDelete} = useContext(DataContext)
    const {id} = useParams();    
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='PostPage'>
            <article className='article'>Post Page</article>
            {
                post && 
                <>
                    <h2>{post.title}</h2>
                    <p className='PostDate'>{post.datetime}</p>
                    <p className='PostBody'>{post.body}</p>
                    <Link to={`/edit/${post.id}`}>
                    <button className='editButton'>Edit Post</button></Link>
                    <button className='deleteButton' onClick={() => handleDelete(post.id)}>Delete Post</button>
                </>
            }
            {
                !post && 
                <>
                <h2>Post not found</h2>
                <p>Post Not found. Please try different</p>
                </>
            }
            
        </main>
    )
}

export default PostPage