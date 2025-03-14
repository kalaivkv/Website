import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { styled } from "@mui/system";

const Header = styled(AppBar)({
  backgroundColor: "#232323",
  boxShadow: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "5px 20px",
});

const Logo = styled("img")({
  height: "25px",
});

const BuyButton = styled(Button)({
  backgroundColor: "#8BC34A",
  color: "#fff",
  textTransform: "none",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#7CB342",
  },
});

const Header1 = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Logo src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="Envato Market Logo" />
      </Toolbar>
      <BuyButton variant="contained">Buy now</BuyButton>
    </Header>
  );
};

export default Header1;
