import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../components/Header";

const useStyles = makeStyles({
  rootApp: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/img/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.rootApp}>
      <CssBaseline />
      <Header />
    </div>
  );
}

export default App;
