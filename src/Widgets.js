import React from "react";
import "./Widgets.css";
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1568706225939877888"} />
                <h2>Who to follow</h2>
                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "DisguisedToast"
                    options = {{height: 400}}
                />
                <TwitterShareButton
                    url={"https://www.twitch.tv/disguisedtoast"}
                    options = {{text: "bread is live", via: "DisguisedToast"}}
                />
            </div>

        </div>
    )
}

export default Widgets;