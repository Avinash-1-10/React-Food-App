import React, { useCallback } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const CartItem = ({ item, cartItems, setCartItems }) => {
  const handleRemove = useCallback(() => {
    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity - 1,
                price: product.price,
                totalPrice: product.price * (product.quantity - 1),
              }
            : product
        )
      );
    } else {
      setCartItems(cartItems.filter((product) => product.id !== item.id));
    }
  }, [cartItems, item, setCartItems]);

  return (
    <Card sx={{ width: { xs: 280, sm: 550 } }} key={item.id}>
      <Stack direction="row">
        <CardMedia
          sx={{ width: "115px", height: "115px" }}
          image={item.image}
        />
        <CardContent sx={{ width: { xs: 200, sm: 500 } }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              >
                {item.name}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  marginTop: "10px",
                  color: "green",
                  fontSize: { xs: "10px", sm: "20px" },
                  fontWeight: "bold",
                }}
              >
                Quantity: {item.quantity}
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Typography
                style={{
                  color: "#3e46f5",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Rs {item.totalPrice}
              </Typography>
              <CardActions>
                <Button onClick={handleRemove}>
                  <RemoveShoppingCartIcon style={{ color: "red" }} />
                </Button>
              </CardActions>
            </Stack>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default CartItem;
