import { Stack } from "@mui/material";

const Video = ({ videos }) => {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      justifyContent={"start"}
      alignItems={"center"}
      gap={2}
    ></Stack>
  );
};

export default Video;
