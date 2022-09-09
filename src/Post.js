import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
    }) {
        return (
            <div className="post">
                <div className="post_avatar">
                    <Avatar src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn" />
                </div>
                <div className="post_body">
                    <div className="post_header">
                        <div className="post_headerText">
                            <h3>
                                Cute Dog {" "} 
                                <span>
                                < VerifiedUserIcon className="post_badge" />
                                </span>
                            </h3>
                        </div>
                        <div className="post_headerDescription">
                            <p>Woof Woof Bitch</p>
                        </div>
                        <img
                        src="https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
                        alt=" "
                        />
                        <div className="post_footer">
                            <ChatBubbleOutlineIcon fontSize="small" />
                            <RepeatIcon fontSize="small" />
                            <FavoriteBorderIcon fontSize="small" />
                            <PublishIcon fontSize="small" />

                        </div>

                    </div>
                </div>
            </div>
        )
    }

export default Post;