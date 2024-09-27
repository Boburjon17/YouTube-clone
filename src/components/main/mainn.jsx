import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { color } from "../../constants/color";
import { Category, Videos } from "../index";
import { category } from "../../constants";
import { ApiService } from "../../service/api.service";

const Mainn = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("New");
  const [videos, setVideos]= useState([])

  const SelectedCategoryHandler = (category) => SetSelectedCategory(category);

  useEffect(()=> {
    const getData= async() =>{

      try {
        const data= await  ApiService.fetching(`search?part=snippet&q=${SelectedCategory}`)
      setVideos(data.items);
        
      } catch (error) {
        console.log(error);
      }
      
    }

    getData()
  }, [])

  return (
    <Stack>
      <Category SelectedCategoryHandler={SelectedCategoryHandler}
      SelectedCategory ={SelectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {SelectedCategory}{" "}
            <span style={{ color: color.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos}  />
       
        </Container>
      </Box>
    </Stack>
  );
};

export default Mainn;
