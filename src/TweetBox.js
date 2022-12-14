import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";



function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="images/isme.png" />
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input 
                    className="tweetBox_imageInput"
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />

            

                <Button className="tweetBox_tweetButton"> Tweet</Button>
            </form>

        </div>
    )
}

export default TweetBox;