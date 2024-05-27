import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { ownerData } from "../../utils/constant";
import useIdentityStyles from "./Idntity.module";
import acacia from "../../assets/acacia.png";

const Identity = () => {
  const style = useIdentityStyles();


  return (
    <Box id="ourselves" component="section" className={style.classes.container}>
      {ownerData.map((item) => (
        <Card variant="outlined" className={style.classes.card}>
          <CardMedia
            component="img"
            // height="140"
            image={acacia}
            alt={item.name}
          />
          <CardContent className={style.classes.card}>

            <Typography gutterBottom variant="h3" >
              {item.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" >
              {item.descriptions}
            </Typography>

          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
export default Identity;