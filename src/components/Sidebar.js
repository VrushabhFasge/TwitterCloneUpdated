import React from "react";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import EmailIcon from "@material-ui/icons/Email";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={<HomeIcon></HomeIcon>} text="Home" />

      <SidebarOption Icon={<ExploreIcon></ExploreIcon>} text="Explore" />

      <SidebarOption
        Icon={<NotificationsActiveIcon></NotificationsActiveIcon>}
        text="Notifications"
      />

      <SidebarOption Icon={<EmailIcon></EmailIcon>} text="Message" />

      <SidebarOption Icon={<BookmarksIcon></BookmarksIcon>} text="Bookmarks" />

      <SidebarOption Icon={<ListIcon></ListIcon>} text="List" />

      <SidebarOption
        Icon={<AccountCircleIcon></AccountCircleIcon>}
        text="Profile"
      />

      <SidebarOption Icon={<MoreHorizIcon></MoreHorizIcon>} text="More..." />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
