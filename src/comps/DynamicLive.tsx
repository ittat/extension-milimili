import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import React from "react";

interface ILive{
    type:number,
    live_play_info:{
        room_id:number,
        live_id:string, 
        cover:string,
        title:string,
        link:string
    }
}

const DynamicLive = ({ content }: { content: string,}) => {

    const jsonData = JSON.parse(content) as ILive; 
    return <Box  onClick={() => { window.open(jsonData.live_play_info.link, '_blank') }}>

        <CardMedia
            component="img"
            height="140"
            image={jsonData.live_play_info.cover}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary" component="p" noWrap>
                {jsonData.live_play_info.title}
            </Typography>
        </CardContent>

    </Box>
}

export default DynamicLive;