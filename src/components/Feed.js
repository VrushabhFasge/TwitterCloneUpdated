import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import React, { useState, useEffect } from "react";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import db from "./Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2 className="text_header">
          Home
          <WhatshotIcon></WhatshotIcon>
        </h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.userName}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      {/* <Post
        displayName="Vrushabh Fasge"
        userName="dopeindiandude"
        verified={true}
        text="yoo its working"
        avatar="https://pbs.twimg.com/profile_images/1271484904727969792/bADU3bgo_400x400.jpg"
        image="https://media.giphy.com/media/dkhLpFGa1qvYOQgUxk/giphy.gif"
      /> */}
    </div>
  );
}

export default Feed;
