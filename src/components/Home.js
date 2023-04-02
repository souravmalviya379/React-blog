import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from '../firebase';

function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').get().then((snapshot)=>{
            const posts = snapshot.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            console.log('posts', posts);
            setPosts(posts);
        });
    }, []);

    return(
        <div className="home">
            <h1 style={styles.heading}>Tech Blog</h1>
            <div id="blog-by">Sourav Malviya</div>

            {posts.map((post, index)=>(
                <div className="post" key={`post-${index}`}> 
                    <Link to={`/post/${post.id}`}> 
                        <h3> {post.title} </h3>
                    </Link>
                    <p>{post.subTitle}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;


const styles = {
    heading: {
        marginTop: 30,
        fontSize: 50
    }
}