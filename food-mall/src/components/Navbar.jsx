import React, { useState } from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Stack } from "@mui/system";
import {
  Typography,
  Button,
  Badge,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CartItem from "./CartItem";

const Navbar = ({ cartItems, setCartItems }) => {
  const [open, setOpen] = useState(false);

  let totalPrice = 0;
  cartItems.map((item) => {
    return (totalPrice += item.totalPrice);
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "30px",
          background: "linear-gradient(to right, #2828e2, #5a61f6)",
          color: "white",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
          }}
        >
          <Stack direction="row">
            <RestaurantIcon fontSize="large" />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", paddingLeft: "10px", color: "#fff" }}
            >
              Food-Mall
            </Typography>
          </Stack>
          <Button onClick={handleOpen} sx={{ color: "#fff" }}>
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon fontSize="large" sx={{ color: "#fff" }} />
            </Badge>
          </Button>
        </Stack>
        <Dialog open={open} onClose={handleClose} fullWidth>
          <Stack direction="row" justifyContent="space-between">
            <DialogTitle>Your Cart</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>
                <CancelIcon />
              </Button>
            </DialogActions>
          </Stack>
          <DialogContent>
            <Stack gap={2}>
              {cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                );
              })}
              <Typography
                sx={{
                  textAlign: "right",
                  color: "green",
                  fontSize:"18px",
                  fontWeight: "bold",
                }}
              >
                Total Price: Rs {totalPrice}
              </Typography>
            </Stack>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

export default Navbar;
