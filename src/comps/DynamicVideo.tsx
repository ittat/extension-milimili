import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import React from "react";

const DynamicVideo = ({ img, desc, videoUrl }: { img: string, desc?: string, videoUrl: string }) => {
    return <Box sx={{ cursor: 'pointer' }} onClick={() => { window.open("https:" + videoUrl, '_blank') }}>

        <CardMedia
            component="img"
            height="140"
            image={img}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary" component="p" noWrap>
                {desc}
            </Typography>
        </CardContent>

    </Box>
}

export default DynamicVideo;