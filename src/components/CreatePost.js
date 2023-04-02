import { useState } from "react";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import db from "../firebase";
import {useFormInput} from '../hooks';


function CreatePost(){
    // const [title, setTitle] = useState();
    // const [subTitle, setSubTitle] = useState();
    // const [content, setContent] = useState();

    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit(e){
        e.preventDefault();

        console.log('title', title.value);
        console.log('subTitle', subTitle.value);
        console.log('content', content.value);

        db.collection('posts').add({
            title: title.value, 
            subTitle: subTitle.value,
            content: content.value,
            createdAt: new Date()
        });
        
    }

    return(
        <div className="create-post">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Title</label>
                    {/* <input value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
                    <input {...title}/>
                </div>
                
                <div className="form-field">
                    <label>Sub Title</label>
                    <input {...subTitle} />
                </div>
                
                <div className="form-field">
                    <label>Content</label>
                    <textarea {...content}></textarea>
                </div>  

                <button className="create-post-btn">Create Post</button>
            </form>
        </div>
    );
}


export default CreatePost;