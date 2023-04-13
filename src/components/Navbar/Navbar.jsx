import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const SocialBox = styled(Box)({
    display: "flex",
    gap: "10px",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: "30px",
  });
  const SearchBox = styled(Box)({
    display: "flex",
    alignItems: "center",
  });

  const menuItems = [
    { Name: "Home", Link: "/" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact", Link: "#" },
  ];

  return (
    <Box>
      <AppBar sx={{ backgroundColor: "black" }} position="static">
        <StyledToolbar>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Typography
                key={item.Name}
                sx={{ cursor: "pointer", fontSize: "14px" }}
              >
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <SearchBox sx={{ marginLeft: { xs: "55px" } }}>
            <SearchIcon  />
            <InputBase placeholder="Search..." sx={{ color: "white" }} />
          </SearchBox>
          <MenuIcon
            onClick={() => {
              setOpenMenu(true);
            }}
            sx={{ cursor: "pointer" ,display: { xs: "block", sm: "block", md: "none" } }}
          />
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Box sx={{width:"100px",height:"50vh"}}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.Name}
                sx={{ cursor: "pointer", fontSize: "14px" }}
              >
                {item.Name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default Navbar;
