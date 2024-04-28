import { Avatar, Box } from "@mui/material";

export function AvatarComponent({ name, email, image}) {
    console.log("name_avatar_", name);
    return (
        <Box display="flex" alignItems="center" >
            <Avatar alt={name} src={image} />
        </Box>
    );
}
