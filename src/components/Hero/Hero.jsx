import { Box, Typography } from "@mui/material";
import React from "react";
import Src from "../../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <Typography variant="h3" align="center" sx={{ fontWeight: "900" }}>
        Fashions <b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography variant="h6" align="center" sx={{ fontWeight: "100" }}>
        We Make you look the better of you!
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${Src})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment:"fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "600px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "180px",
            margin: { xs: "30px", sm: "30px", md: "0px" },
            height: { xs: "120px", sm: "120px", md: "180px" },
            backgroundColor: "white",
            opacity: "0.8",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ color: "red" }}>
              {" "}
              Trending Styles
            </Typography>
            <Typography variant="h6">
              {" "}
              Life is Boring without Fashion!
            </Typography>
            <Typography variant="body2">
              {" "}
              we love to change your style lorme ipsum
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
