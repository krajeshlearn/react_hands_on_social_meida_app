import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";
import api from "../api/posts"


const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')
  const [editPostTitle, setEditPostTitle] = useState('')
  const [editPostContent, setEditPostContent] = useState('')
  const navigate = useNavigate()
  const {width} = useWindowSize()
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3600/posts')

  useEffect( () => {
    console.log(data)
    setPosts(data)
    setSearchResults(data)
  }, [data, setSearchResults])

  // useEffect(() => {
  //       const fetchPosts = async () => {
  //           try {
  //               const response = await api.get('/posts');
  //               console.log(response.data);
  //               setPosts(response.data);
  //               setSearchResults(response.data.reverse());
  //           } catch (error) {
  //               if(error.response) {
  //                 //Not in 200 response
  //                 console.log(error.response.data)
  //                 console.log(error.response.status)
  //                 console.log(error.response.header)
  //               }
  //               else{
  //                 console.error(`Error fetching posts: ${error}`);   
  //               }                
  //           }
  //           finally{
  //           }
  //       };

  //       (async() => fetchPosts())()
  //   }, []);

  useEffect(() => {
    if(search)
    {
      const filterReslts = posts.filter( (post) => ((post.title.toLowerCase()).includes(search.toLowerCase())) 
                    || ((post.body.toLowerCase()).includes(search.toLowerCase()))
              )
              
      setSearchResults(filterReslts.reverse())       
    } 
  },[posts, search,])

  const handlePostAdd = async (e) => {
    e.preventDefault();
    const id = posts.length ? parseInt(posts[posts.length - 1].id) + 1: 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const postItem = {id: id, datetime: datetime, title: postTitle, body: postContent}    
    try{
      const response = await api.post('/posts', postItem)
      const postLists = [...posts, response.data]
      console.log(postLists)
      setPosts(postLists)
      setPostTitle('')
      setPostContent('') 
      navigate('/')   
    }catch (error) {      
        console.error(`Error fetching posts: ${error}`);                        
    }
  }

  const handleEdit = async(id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp")
    const updatedItem = {id: id, datetime: datetime, title: editPostTitle, body: editPostContent}
    try{
      const response = await api.put(`/posts/${id}`, updatedItem)
      setPosts(posts.map(post => post.id === id ? {...response.data} : post))  
      setSearchResults(posts.map(post => post.id === id ? {...response.data} : post))   
      setEditPostTitle('')
      setEditPostContent('') 
      navigate('/')
    }
    catch(err){
      console.log(`Error in edit: ${err.message}`)
    }
       
  }

  const handleDelete = async (id) => {
    alert(id)
      //const deletedPosts = posts.filter(post => post.id !== id);
      console.log(`posts/${id}`)
      await api.delete(`posts/${id}`);
      //console.log(deletedPosts);
      //setPosts(response.data)
      navigate('/')
  }

    return (
        <DataContext.Provider value={{
            width, searchResults, setSearch, searchResults, fetchError, fetchError, isLoading,
            postTitle, setPostTitle, postContent, setPostContent, handlePostAdd, posts, handleEdit,
            editPostTitle, setEditPostTitle, editPostContent, setEditPostContent, handleDelete
        }}>
        {children}
        </DataContext.Provider>
    )
}

export default DataContext