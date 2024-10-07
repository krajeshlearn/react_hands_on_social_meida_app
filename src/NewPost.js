import React, { useContext } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {
    const {postTitle, setPostTitle, postContent, setPostContent, handlePostAdd} = useContext(DataContext)
     return (
        <main className='NewPost'>
            <h2>New Post</h2>
            <form className='newPostForm' onSubmit={handlePostAdd}>
                <label htmlFor='postTitle'>Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor='postContent'>Content:</label>
                <textarea 
                    type='textarea'
                    id='postContent'
                    required
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default NewPost