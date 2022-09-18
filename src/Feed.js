import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed(){
    
    return(
        <div className="feed">
            {/* Header */}
            <div className="feed_header">   
                <h2> Home </h2>
            </div>
            {/* Tweet Box */}

            <TweetBox />

            {/* Posts... */}

            <Post 
            displayName="Max Hoac" 
            userName = '@mhoac711'
            verified={true}
            text='testing new things'
            avatar= 'images/isme.png'
            image="https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
            />
            
            

        </div>
    )
}

export default Feed;