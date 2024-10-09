import { Box, Stack } from "@mui/material";
import { VideoCard} from  '../index';

const Video = ({ videos }) => {
  console.log(videos);
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={'wrap'}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
      sx={{border:'2px solid gold'}}

     
    >

    {videos.map(item =>(
      <Box key={item.id.videoId} >
        {item.id.videoId &&  <VideoCard video= {item} />  }

      </Box>
    ))}
    </Stack>
  );
};

export default Video;
