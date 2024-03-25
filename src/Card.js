import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ price, product }) {
  return (
    <div>
      <h2>{product}</h2>
      <Card sx={{ maxWidth: 245 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <h4>yuh</h4>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h2>{price}</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
