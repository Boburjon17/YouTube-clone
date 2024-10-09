import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constants/color";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
 
  return (
    <Card
      
      sx={{
        width: "350px",
        boxShadow: "none",
        borderRadius: 0,
        border: `3px solid green`,
      }}
   
    >
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{ width: "360px", height: "180px", }}
      />
      <CardContent
        sx={{
          background: color.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <>
        <Typography sx={{my:'5px', opacity:'.4' }}>
        {moment(video?.snippet?.publishedAt).fromNow()}
      </Typography>
      <Typography variant='subtitle1' fontWeight={'bold'}>
        {video?.snippet?.title.slice(0, 45)}
      </Typography>
      <Typography variant='subtitle2' opacity={.6} color="grey">
        {video?.snippet?.description.slice(0, 70)}
      </Typography>
        </>
        <>
        <Stack
        direction={'row'}
        bottom={'10px'}
        position={'absolute'}
        alignItems={'center'}
        gap={'5px'}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant="subtitle2" color="grey">
            {video?.snippet?.channelTitle}
          <CheckCircle  sx={{fontSize:'12px', color:'gray', ml:'5px'}} />

          </Typography>
        </Stack>
        </>
     
      </CardContent>
     
    </Card>
  );
};

export default VideoCard;
