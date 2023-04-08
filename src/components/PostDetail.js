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

/*

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Radium from 'radium';

import { firestore } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    firestore
      .collection('posts')
      .doc(postId)
      .get()
      .then((snapshot) => {
        console.log('snapshot', snapshot.data());
        setPost(snapshot.data());
      });
  }, []);

  return (
    <div className="post-detail">
      <h1 style={styles.heading}>{post.title}</h1>
      <p style={styles.postDetail}>{post.content}</p>
    </div>
  );
}

export default Radium(PostDetail);

const styles = {
  postDetail: {
    border: '1px solid #e1e1e1',
    padding: 5,
    paddingTop: 10,
    borderRadius: 5,

    '@media(max-width: 720px)': {
      color: 'pink',
    },
  },
  heading: {
    textAlign: 'center',
    margin: 0,
    ':hover': {
      color: 'red',
    },
  },
};


*/