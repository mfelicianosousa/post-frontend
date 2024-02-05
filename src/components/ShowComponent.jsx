import React,{useState, useEffect} from "react";
import postService from "../services/postService";
import UpdateModalComponent from "./UpdateModalComponent";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowComponent (){

    const [posts, setPosts] = useState({});

    const fetchPosts = async() =>{
        setPosts( await postService.getPosts());

    }
    useEffect(() => {

        fetchPosts();
    },[posts])

    const deletePost = async(id, e ) =>{
       alert(id);
       var response = await postService.deletePost(id);
       console.log(response);
       
       if (response.data.success === true){
         alert(response.data.msg);
         document.getElementById(id)?.parentElement?.parentElement?.remove();
       } else {
        alert(response.data.msg);
       }
    }

    return (
        <div className="App">
            <h1>Show Posts</h1>
            {posts.data !== undefined && posts.data.data.length > 0 && (
            <table style={{width: '100%'}} border='1'>
                    <thead>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Image</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                        {posts.data.data.map(post=>(
                            <tr>
                                <td>{post.title}</td>
                                <td>{post.date}</td>
                                <td>
                                    <img src={'http://localhost:3333/api/postImages/'+post.image} 
                                         alt={post.title}
                                         style={{width: '100px', height: '100px'}}/>
                                </td>
                                <td>
                                    <button type="button"
                                        id={post._id}
                                        onClick={(e) => deletePost(post._id, e)}>delete
                                    </button>
                                </td>
                                <td>
                                    <UpdateModalComponent  id={post._id} title={post.title} date={post.date}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )

}

export default ShowComponent;
