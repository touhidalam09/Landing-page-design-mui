import React from "react";
import { makeStyles } from "@mui/styles";
import ImgMediaCard from "../components/ImgMediaCard";
import * as cardData from "../service/cardData";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  pageToVisit: {
    minHeight: "100vh",
  },
});
function PageToVisit() {
  const classes = useStyles();
  return (
    <Container className={classes.pageToVisit} id="page-to-visit-card-Media">
      <ImgMediaCard items={cardData.getAllInformationAboutProject()} />
    </Container>
  );
}

export default PageToVisit;
