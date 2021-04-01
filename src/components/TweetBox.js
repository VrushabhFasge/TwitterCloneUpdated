import "./TweetBox.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useState } from "react";
import db from "./Firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Twitter User",
      userName: "twitterUser🐦",
      verfied: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1243649090048663552/HVlhkgCM_400x400.jpg"
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar
            className="photo"
            src="https://pbs.twimg.com/profile_images/1271484904727969792/bADU3bgo_400x400.jpg"
          />

          <input
            className="tweetBox_textInput"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening ?"
          ></input>
        </div>
        <input
          className="tweetBox_imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Optional: Enter image URL"
        ></input>
        <Button onClick={sendTweet} className="tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
