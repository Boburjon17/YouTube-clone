import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { color } from "../../constants/color";
import { Category } from "../index";
import { category } from "../../constants";

const Mainn = () => {
  const [SelectedCategory, SetSelectedCategory] = useState("New");

  const SelectedCategoryHandler = (category) => SetSelectedCategory(category);

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
        </Container>
      </Box>
    </Stack>
  );
};

export default Mainn;
