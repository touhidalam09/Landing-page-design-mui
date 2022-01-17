import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles({
  rootBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Nunito",
  },
  appBar: {
    background: "none",
    marginTop: "20px",
  },
  appBarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appBarTitle: {
    flexGrow: "1",
    "&.MuiTypography-root": {
      fontSize: "1.8rem",
    },
  },
  island: {
    color: "#fff",
    "& span": {
      color: "#5AFF3D",
    },
    "&.MuiTypography-root": {
      fontFamily: "Nunito",
      fontWeight: "bold",
    },
  },
  icon: {
    color: "#fff",
    "&.MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
    "&:hover": {
      color: "#E33E5A",
    },
  },
  welcomeBox: {
    textAlign: "center",
  },
  welcomeTitle: {
    "&.MuiTypography-root": {
      fontSize: "4.5rem",
    },
  },
  iconGoDown: {
    color: "#fff",
    "&.MuiSvgIcon-root": {
      fontSize: "3.5rem",
    },
    "&:hover": {
      color: "#E33E5A",
    },
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.rootBox}>
      <AppBar className={classes.appBar} elevation={0} color="transparent">
        <Toolbar className={classes.appBarWrapper}>
          <Typography
            variant="h3"
            className={`${classes.appBarTitle} ${classes.island}`}
          >
            My<span>Island.</span>
          </Typography>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="div" className={classes.welcomeBox}>
        <Typography
          variant="h1"
          className={`${classes.welcomeTitle} ${classes.island}`}
        >
          Welcome to
          <br />
          My<span>Island.</span>
        </Typography>
        <IconButton>
          <ExpandMoreIcon className={classes.iconGoDown} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;
