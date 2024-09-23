import { Stack } from "@mui/material";
import React from "react";
import { category } from "../../constants";
import { color } from "../../constants/color";

const Category = ({ SelectedCategoryHandler, SelectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{ background: item.name === SelectedCategory && color.secondary,
                  color:item.name=== SelectedCategory && "#fff"
          }}
          onClick={  ()=> SelectedCategoryHandler(item.name)}
        >
          <span style={{ color: item.name === SelectedCategory && color.primary }}> {item.icon} </span>
          <span> {item.name} </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
