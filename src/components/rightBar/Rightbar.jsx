import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CardComponents from '../Card/Card';
import Src1 from "../../assets/image1.jpg"
import Src2 from "../../assets/image2.jpg"
import Src3 from "../../assets/image3.jpg"
import Src4 from "../../assets/image4.jpg"

const Rightbar = () => {
  return (
    <Box>
        <Typography align='center' bgcolor={"black"} color={"white"}>Popular Posts</Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Src1} variant='square' />
        </ListItemAvatar>
        <ListItemText
          secondary=
              {" — I'll be in your neighborhood doing errands this…"}
        />
       </ListItem>
       <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Src2}  variant='square' />
        </ListItemAvatar>
        <ListItemText
          secondary=
              {" — I'll be in your neighborhood doing errands this…"}
        />
       </ListItem>
       <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Src3}  variant='square' />
        </ListItemAvatar>
        <ListItemText
          secondary=
              {" — I'll be in your neighborhood doing errands this…"}
        />
       </ListItem>
       <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Src4}  variant='square' />
        </ListItemAvatar>
        <ListItemText
          secondary=
              {" — I'll be in your neighborhood doing errands this…"}
        />
       </ListItem>
       <Divider variant='inset' component={"li"}/>
      </List>
      <Typography align='center' bgcolor={"black"} color={"white"}>About Us</Typography>
      <CardComponents Src={Src1}/>
    </Box>
  )
}

export default Rightbar
