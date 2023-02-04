import React from "react";
import { Stack } from "@mui/system";
import Meal from "./Meal";
import { Typography } from "@mui/material";

const Meals = (props) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#991beb",
          marginTop: "20px",
        }}
      >
        Hungry? Order Delicious Food Straight to Your Door
      </Typography>
      <Stack
        direction="row"
        gap={2}
        sx={{ margin: "20px" }}
        flexWrap="wrap"
        justifyContent={"center"}
        alignItems="center"
      >
        <Meal addToCart={props.addToCart} />
      </Stack>
    </>
  );
};

export default Meals;
