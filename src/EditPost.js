import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const EditPost = () => {
    const {posts, handleEdit, editPostTitle, setEditPostTitle, editPostContent, setEditPostContent} = useContext(DataContext)
    const {id} = useParams()    
    const post = posts.find(post => (post.id).toString() === id)
    useEffect(() =>
    {
        
        if(post)
        {
            setEditPostTitle(post.title)
            setEditPostContent(post.body)
        }
        
    },[post, setEditPostTitle, setEditPostContent])
  
    return (
    <main className="NewPost">
        {            editPostTitle && 
        <>
        <h2>Edit Post</h2> 
        
            <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='title'>Edit Title</label>
                <input
                    id='title'
                    type='text'
                    required
                    value={editPostTitle}
                    onChange={(e) => setEditPostTitle(e.target.value)}
                />
                <label htmlFor='content'>Edit Content</label>
                <textarea
                    id='content'                    
                    required
                    value={editPostContent}
                    onChange={(e) => setEditPostContent(e.target.value)}
                />
                <button className='' onClick={() => handleEdit(post.id)}>
                    Submit
                </button>
            </form>
            </>
        }
    </main>
  )
}

export default EditPost