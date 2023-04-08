import { useState } from "react";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import db from "../firebase";
import {useFormInput} from '../hooks';

import './Button.css';

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













/*



import { firestore } from '../firebase';
import { useFormInput } from '../hooks';
import styled, { css } from 'styled-components';
// import classes from './Button.module.css';

const StyledButton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? '#4caf50' : 'blue')};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  ${(props) =>
    props.primary &&
    css`
      border: 4px solid ${props.bgColor};
    `};
`;

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    firestore.collection('posts').add({
      title: title.value,
      content: content.value,
      subTitle: subTitle.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <StyledButton primary bgColor="blue">
          Create Post
        </StyledButton>
        {/* <StyledButton primary>Create Post</StyledButton> *//*}
      </form>
    </div>
  );
}

export default CreatePost;
*/