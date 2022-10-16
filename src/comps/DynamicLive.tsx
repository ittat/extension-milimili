import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import React from "react";


// {
//     "live_play_info": {
//         "room_id": 2105522,
//         "play_type": 0,
//         "live_status": 1,
//         "area_name": "聊天电台",
//         "live_id": "282101586671444146",
//         "live_screen_type": 0,
//         "pendants": {
//             "list": null
//         },
//         "uid": 7481602,
//         "room_type": 0,
//         "cover": "http://i0.hdslb.com/bfs/live/new_room_cover/e74308c72afd2e8ad9ee5036de91700a2e62e3b7.jpg",
//         "online": 13404,
//         "parent_area_name": "电台",
//         "watched_show": {
//             "icon_location": "",
//             "icon_web": "https://i0.hdslb.com/bfs/live/8d9d0f33ef8bf6f308742752d13dd0df731df19c.png",
//             "switch": true,
//             "num": 23836,
//             "text_small": "2.3万",
//             "text_large": "2.3万人看过",
//             "icon": "https://i0.hdslb.com/bfs/live/a725a9e61242ef44d764ac911691a7ce07f36c1d.png"
//         },
//         "room_paid_type": 0,
//         "title": "剧透大结局",
//         "area_id": 192,
//         "parent_area_id": 5,
//         "live_start_time": 1664195389,
//         "link": "https://live.bilibili.com/2105522"
//     },
//     "live_record_info": null,
//     "type": 1
// }


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