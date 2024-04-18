import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "../../assets/icons/email_icon.png";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { SearchBar } from "../../components/SearchBar";
import { RightSideBar } from "../../components/RightSideBar";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
  color: "#444746",
});
export function Header() {
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar>
          <Grid container flex={0.7} justifyContent={"flex-start"}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon color="action" />
            </IconButton>
            <Grid container flex={1} gap={1} alignItems={"center"}>
              <img width={30} src={EmailIcon} alt="M" />
              <Typography variant="h6" style={{ alignSelf: "center" }}>
                Email Pro
              </Typography>
            </Grid>
          </Grid>
          <SearchBar />
          <RightSideBar />
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}
