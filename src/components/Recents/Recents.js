import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import Card from '../Card/Card'
import Src1 from "../../assets/image1.jpg"
import Src2 from "../../assets/image2.jpg"
import Src3 from "../../assets/image3.jpg"
import Src4 from "../../assets/image4.jpg"
import Src5 from "../../assets/image5.jpg"

const Recents = () => {
  return (
    <Box>
      <Grid container>
        <Grid  item xs={12} md={6}><Card Src={Src1}/></Grid>
        <Grid  item xs={6} md={6}><Card Src={Src2}/></Grid>
        <Grid  item xs={6} md={6}><Card Src={Src3}/></Grid>
        <Grid  item xs={6} md={6}><Card Src={Src4}/></Grid>
        <Grid  item xs={6} md={6}><Card Src={Src5}/></Grid>
      </Grid>
      <Stack>

      </Stack>
    </Box>
  )
}

export default Recents
