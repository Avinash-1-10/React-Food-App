import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MEALS from "./data";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Meal = (props) => {
  const addItem = (item) => {
    const product = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: 1,
      totalPrice: item.price,
    };
    props.addToCart(product);
  };

  return (
    <>
      {MEALS.map((item, index) => {
        return (
          <Card style={{ minWidth: '300px' }} id={index} key={item.id}>
            <CardMedia  style={{ height: 200 }} image={item.image} />
            <CardContent>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {item.name}
              </Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
              <Typography
                variant="h6"
                style={{ color: "#3e46f5", fontWeight: "bold" }}
              >
                Rs{item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<AddShoppingCartIcon />}
                variant="contained"
                style={{
                  background: "linear-gradient(to right, #2828e2, #5a61f6)",
                  fontWeight: "bold",
                }}
                onClick={() => addItem(item)}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Meal;
