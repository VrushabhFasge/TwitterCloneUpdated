import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>What's happening ?</h2>
        <TwitterTweetEmbed tweetId={"1374424830573907969"} />

        <TwitterTimelineEmbed
          sourcetype="profile"
          screenName="VrushabhFasge"
          options={{ height: 400 }}
        />

        {/* <TwitterTimelineEmbed
          sourcetype="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        /> */}

        <TwitterShareButton
          url={"https://twitter.com/VrushabhFasge"}
          options={{ text: "#reactJs is awesome", via: "VrushabhFasge" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
