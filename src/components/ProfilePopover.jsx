import { Popover, Typography } from "@mui/material";
import { AvatarComponent } from "./Avatar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/actions";

export function ProfilePopover(props) {
  const { id, open, anchorEl, handleClose, userDetails } = props;
  console.log("id, open, anchorEl,", id, open, anchorEl);
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        ".MuiPaper-root": {
          borderRadius: "10px", // Set the border-radius
          width: "400px", // Set a specific width
          maxWidth: "none", // This allows the popover to escape default max widths
          bgcolor: "rgba(34, 34, 34, 0.87)",
        },
      }}
    >
      <div style={{ margin: "auto", padding: "15px 40px", color: "white" }}>
        <p style={{ textAlign: "center" }}>{userDetails.email}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            justifyContent: "center",
          }}
        >
          <AvatarComponent
            name={userDetails.displayName}
            email={userDetails.email}
            image={userDetails.photoURL}
          />
        </div>
        <p style={{ textAlign: "center", marginBottom: '20px' }}>
          Hi {userDetails.displayName.split(" ")[0]}!
        </p>
        <div
          style={{
            display: "flex",
            gap: "1px",
            margin: "10px 0px",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              padding: "12px",
              backgroundColor: "black",
              borderRadius: "10px 0px 0px 10px",
            }}
          >
            <AccountCircleIcon />
            <p> Account</p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              padding: "12px",
              backgroundColor: "black",
              borderRadius: "0px 10px 10px 0px",
            }}
            onClick={handleLogout}
          >
            <ExitToAppIcon />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </Popover>
  );
}
