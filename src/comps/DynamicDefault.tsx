import CardContent from "@mui/material/CardContent/CardContent";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { IWebDynamic } from "../common/interface";
import React from "react";

const DynamicDefault = ({type}:{type:IWebDynamic["type"]}) => {
    return <>
        <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
        <CardContent>
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                {/* <Skeleton animation="wave" height={10} width="80%" /> */}
                {type}
        </CardContent>
    </>
}

export default DynamicDefault;