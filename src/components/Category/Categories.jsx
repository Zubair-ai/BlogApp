import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import Kids from "../../assets/kids.jpg";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";

const Categories = () => {
  const BoxStyled = styled(Box)({
    height: 200,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    
  });
  const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.8",
    borderRadius:"5px",
    cursor:"pointer",
    
  });
  return (
      <Box>
        <Stack direction={{ xs: "column", sm: "row" }}
       spacing={{ xs: 1, sm: 2, md: 4 }} mt={5} alignItems={"center"}  >
        <BoxStyled
          sx={{
            backgroundImage: `url(${Kids})`,
          }}
          
        >
          <StyledTypography variant="h3" align="center">Kids</StyledTypography>
        </BoxStyled>
        <BoxStyled sx={{ backgroundImage: `url(${men})`}}>
          <StyledTypography  variant="h3"  align="center" >Men</StyledTypography>
        </BoxStyled>
        <BoxStyled sx={{ backgroundImage: `url(${women})` }}>
          <StyledTypography  variant="h3"  align="center" >Women</StyledTypography>
        </BoxStyled>
      </Stack>
      </Box>
  );
};

export default Categories;
