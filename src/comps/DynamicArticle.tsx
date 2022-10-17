import CardContent from "@mui/material/CardContent/CardContent";
import CardMedia from "@mui/material/CardMedia/CardMedia";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";

const DynamicArticle = ({ covers, desc, jump_url, title }: {
    covers?: string[],
    desc?: string,
    // id: number,
    jump_url?: string,
    label?: string,
    title?: string
}) => {
    return <>
        {covers ?
            covers.length == 1 ? <CardMedia
                component="img"
                height="140"
                image={covers[0]}
            /> : <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {covers.length == 2
                    ? covers.map(imgSrc => <Grid key={imgSrc} item xs={6}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imgSrc}
                        // alt={img.tags.join(",")}
                        />
                    </Grid>)
                    : covers.length == 3 ?
                        <>
                            <Grid key={covers[0]} item xs={12}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={covers[0]}
                                // alt={draws[0].tags.join(",")}
                                />
                            </Grid>
                            <Grid key={covers[1]} item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={covers[1]}
                                // alt={draws[1].tags.join(",")}
                                />

                            </Grid>
                            <Grid key={covers[2]} item xs={6}>
                                <CardMedia
                                    component="img"
                                    height="70"
                                    image={covers[2]}
                                // alt={draws[2].tags.join(",")}
                                />
                            </Grid>

                        </>

                        : covers.slice(0, 4).map(imgSrc => <Grid key={imgSrc} item xs={6}>
                            <CardMedia
                                component="img"
                                height="70"
                                image={imgSrc}
                            // alt={img.tags.join(",")}
                            />
                        </Grid>)
                }
            </Grid>
            : <></>
        }

        <CardContent>
            <Typography 
            // sx={{ height: 70 }}
             variant="body2" color="text.secondary" component="p">
                {title}
                {desc}
            </Typography>
        </CardContent>
    </>
}

export default DynamicArticle;

