import { HelpOutline, SettingsOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import { AvatarComponent } from "./Avatar";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/auth/selectors";
import { useState } from "react";
import { ProfilePopover } from "./ProfilePopover";

export function RightSideBar() {
    const {current, isLoading, isSuccess} = useSelector(selectAuth)
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return  (
        <Grid container flex={1} gap={2} justifyContent={"flex-end"}>
           <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="helpIcon"
            ><HelpOutline/>
            </IconButton>
            <IconButton
              size= "medium"
              edge="start"
              color="inherit"
              aria-label="settings"
            >
            <SettingsOutlined/>
            </IconButton>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="apps"
            >
            <AppsIcon/>
            </IconButton>
            <div onClick={handleClick} aria-describedby={id}>
            <AvatarComponent name={current.displayName} image={current.photoURL}/> 
            </div>
            <ProfilePopover id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} userDetails={current}/>
        </Grid>
    )
}