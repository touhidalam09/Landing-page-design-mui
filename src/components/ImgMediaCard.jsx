import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Collapse, Grid } from "@mui/material";

const useStyles = makeStyles({
  card: {
    maxWidth: 445,
  },
  cardImgMedia: {
    maxHeight: 340,
  },
  title: {
    color: "#111",
    "&.MuiTypography-root": {
      fontFamily: "Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
    },
  },
  desc: {
    color: "#ddd",
    "&.MuiTypography-root": {
      fontFamily: "Nunito",
      fontSize: "1.1rem",
    },
  },
  gridContainer: {
    padding: "100px 0px",
  },
});

function ImgMediaCard(props) {
  const classes = useStyles();
  const { items, checked } = props;
  return (
    <>
      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
        <Grid
          container
          justifyContent="center"
          rowSpacing={{ xs: 4, sm: 6, lg: 8 }}
          columnSpacing={{ sm: 1 }}
          className={classes.gridContainer}
        >
          {items.map((item) => (
            <Grid
              key={item.id}
              item
              md={12}
              lg={6}
              display="grid"
              justifyContent="center"
            >
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Project demo - landing page"
                  className={classes.cardImgMedia}
                  image={item.imageUrl}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
}

export default ImgMediaCard;
