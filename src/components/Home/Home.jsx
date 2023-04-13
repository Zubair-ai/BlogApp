import { Box, Container, Stack } from "@mui/material";
import React from "react";

import Hero from "../Hero/Hero";
import Categories from "../Category/Categories";
import Recents from "../Recents/Recents";
import Rightbar from "../rightBar/Rightbar";


const Home = () => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />
        <Stack direction={{ xs: "column", md: "row" }} gap={2}>
          <Box flex={2}>
            <Recents />
          </Box>
          <Box flex={1} mt={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
