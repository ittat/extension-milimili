import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import React, { useMemo } from "react";
import { IWebDynamic } from "../common/interface";
import DynamicArticle from "./DynamicArticle";
import DynamicDefault from "./DynamicDefault";
import DynamicDraw from "./DynamicDraw";
import DynamicForward from "./DynamicForward";
import DynamicLive from "./DynamicLive";
import DynamicVideo from "./DynamicVideo";
import DynamicWord from "./DynamicWord";

interface MediaProps {
  loading?: boolean;
  data: IWebDynamic;
}

function Media(props: MediaProps) {
  const { loading = false, data } = props;


  const content = useMemo(() => {
    if (data.type === 'DYNAMIC_TYPE_WORD') {
      return <DynamicWord text={data.modules?.module_dynamic?.desc?.text || ''} />
    } else if (data.type === 'DYNAMIC_TYPE_AV') {
      return <DynamicVideo
        videoUrl={data.modules.module_dynamic.major?.archive?.jump_url || ''}
        img={data.modules.module_dynamic.major?.archive?.cover || ''}
        desc={data.modules.module_dynamic.major?.archive?.title}
      />

    } else if (data.type == 'DYNAMIC_TYPE_DRAW') {

      return <DynamicDraw
        desc={data.modules.module_dynamic.desc?.text}
        draws={data.modules.module_dynamic.major?.draw?.items || []}
      />

    }
    else if (data.type == 'DYNAMIC_TYPE_LIVE_RCMD') {

      return <DynamicLive content={data.modules.module_dynamic.major?.live_rcmd?.content || '{}'} />
    } else if (data.type == 'DYNAMIC_TYPE_FORWARD') {
      return <DynamicForward
        text={data.modules?.module_dynamic?.desc?.text || ''}
        orig={data.orig}
      />

    } else if (data.type == "DYNAMIC_TYPE_ARTICLE") {
      return <DynamicArticle
        title={data.modules.module_dynamic.major?.article?.title}
        covers={data.modules.module_dynamic.major?.article?.covers}
        desc={data.modules.module_dynamic.major?.article?.desc}
        jump_url={data.modules.module_dynamic.major?.article?.jump_url}
        label={data.modules.module_dynamic.major?.article?.label}     />
    } else {
      return <DynamicDefault type={data.type} />
    }
  }, [data])

  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt={data.modules.module_author.name}
              src={data.modules.module_author.face}
              sx={{ cursor: 'pointer' }}
              onClick={() => window.open("https:" + data.modules.module_author.jump_url, '_blank')}
            />
          )
        }
        // action={
        //   loading ? null : null
        // }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Box
              sx={{ cursor: 'pointer', ':hover': { textDecoration: "underline" } }}
              onClick={() => window.open("https:" + data.modules.module_author.jump_url, '_blank')}
            >{data.modules.module_author.name}</Box>
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            data.modules.module_author.pub_time
          )
        }
      />
      <Box sx={{ minHeight:180 }}>
           {content}  
      </Box>
 
    </Card>
  );

}


export default Media