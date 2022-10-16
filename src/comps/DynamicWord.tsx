import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

const DynamicWord = ({ text }: { text: string }) => {
    return <CardContent>
        <Typography sx={{height:140}} variant="body2" color="text.secondary" component="p">
            {text}
        </Typography>
    </CardContent>
}

export default DynamicWord;
