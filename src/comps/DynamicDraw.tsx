import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";
import { IDraw } from "../common/interface";

const DynamicDraw = ({ draws, desc }: { draws: IDraw[], desc?: string }) => {
    return <>
        {
            draws.length == 1 ? <CardMedia
                component="img"
                height="140"
                image={draws[0].src}
                alt={draws[0].tags.join(",")}
            /> : <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {draws.length == 2
                    ? draws.map(img => <Grid key={img.src} item xs={6}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img.src}
                            alt={img.tags.join(",")}
                        />
                    </Grid>)
                    : draws.length == 3 ?
                        <>
                            <Grid key={draws[0].src} item xs={12}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={draws[0].src}
                                    alt={draws[0].tags.join(",")}
                                />
                            </Grid>
                            <Grid key={draws[1].src} item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={draws[1].src}
                                    alt={draws[1].tags.join(",")}
                                />
                            </Grid>
                            <Grid key={draws[2].src} item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={draws[2].src}
                                    alt={draws[2].tags.join(",")}
                                />
                            </Grid>

                        </>

                        : draws.slice(0, 4).map(img => <Grid key={img.src} item xs={6}>
                            <CardMedia
                                component="img"
                                height="70"
                                image={img.src}
                                alt={img.tags.join(",")}
                            />
                        </Grid>)
                }
            </Grid>
        }


        <CardContent>
            <Typography variant="body2" color="text.secondary" component="p"
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                }} >
                {desc}
            </Typography>

        </CardContent>


    </>
}

export default DynamicDraw;