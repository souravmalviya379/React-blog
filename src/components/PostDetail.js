import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import db from '../firebase';

function PostDetail(){
    const [post, setPost] = useState({});
    const {postId} = useParams();

    useEffect(()=>{
        db.collection('posts').doc(postId).get().then((snapshot)=>{
            console.log('snapshot', snapshot.data());
            setPost(snapshot.data());

        })
    }, []);

    return(
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;