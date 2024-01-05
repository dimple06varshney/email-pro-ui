import { Avatar, ListItemAvatar } from "@mui/material";

export function AvatarComponent({name, email, image }){
    return (
        <ListItemAvatar>
            <Avatar
             alt={name} src={image} />
        </ListItemAvatar>
    )
}