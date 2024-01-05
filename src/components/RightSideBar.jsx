import { HelpOutline, SettingsOutlined } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import { AvatarComponent } from "./Avatar";

export function RightSideBar() {
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
            <AvatarComponent name="Dimple Varshney" /> 
        </Grid>
    )
}