import { Box,Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

const CardComponents = ({Src}) => {
  return (
    <Box margin={1}>
      <Link to={"/details"} style={{ textDecoration:"none"}} >
      <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width={"100%"}
          image={Src}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom align='center' color={"red"} variant="h6" >
            PERFUMES
          </Typography>
          <Typography gutterBottom align='center' variant="body1" >
            Wearing this will make everyone love you
          </Typography>
          <Typography gutterBottom align='center' variant="body2" >
           it's womens love
          </Typography>
          <Typography variant="body2" align='center' mt={3} color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Link>
    </Box>
  )
}

export default CardComponents
