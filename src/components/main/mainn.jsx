import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { color } from "../../constants/color";
import { Category, Videos } from "../index";
import { category } from "../../constants";
import { ApiService } from "../../service/api.service";

const Mainn = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("New");

  const SelectedCategoryHandler = (category) => SetSelectedCategory(category);
  useEffect(()=> {
    const getData= async() =>{
      const data= await  ApiService.fetching('search')
      console.log(data);
    }
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
          <Videos/>
        </Container>
      </Box>
    </Stack>
  );
};

export default Mainn;
