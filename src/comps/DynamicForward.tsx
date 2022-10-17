import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import CardContent from "@mui/material/CardContent/CardContent";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { IWebDynamic } from "../common/interface";
import Media from "./Media";

const DynamicForward = ({ text, orig }: { text: string, orig: IWebDynamic }) => {
    return <CardContent>
        <Typography sx={{
            height: 40,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",

        }} variant="body2" color="text.secondary" component="p">
            {text}
        </Typography>
        {/* <Media data={orig}/>  */}


        <Box height={100} border="1px solid #80808030" borderRadius={5} display="flex" alignItems="center">
            <Box
                mx={5}
                sx={{
                    cursor: 'pointer', ':hover': { textDecoration: "underline" },


                }}
                onClick={() => window.open("https:" + orig.modules.module_author.jump_url, '_blank')}
            >
                <Avatar
                    alt={orig.modules.module_author.name}
                    src={orig.modules.module_author.face}
                    sx={{
                        cursor: 'pointer',
                    }}
                    onClick={() => window.open("https:" + orig.modules.module_author.jump_url, '_blank')}
                />
                <Box
                    sx={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",

                    }}
                >
                    {orig.modules.module_author.name}
                </Box>

            </Box>

            <Box
                mx={2}
                sx={{
                    cursor: 'pointer',
                    ':hover': { textDecoration: "underline" },
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                }}

            // onClick={() => window.open("https:" + orig.modules.module_author.jump_url, '_blank')}
            >

                {orig.modules.module_dynamic.desc?.text || orig.modules.module_dynamic.major?.article?.title}
                {orig.modules.module_dynamic.desc?.text
                    || orig.modules.module_dynamic.major?.archive?.title
                    || orig.modules.module_dynamic.major?.article?.title
                    || orig.modules.module_dynamic.major?.live.title
                    || "转发内容"}
            </Box>

        </Box>


    </CardContent >
}

export default DynamicForward;

