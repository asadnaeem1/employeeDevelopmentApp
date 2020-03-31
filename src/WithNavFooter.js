import Navbar from "./components/Navbar";
import { Container } from "@material-ui/core";
import { Fragment } from "react";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(12)
  }
}));

export default function WithNavFooter(Component) {
  return () => {
    const classes = useStyles();
    return (
      <Fragment>
        <Navbar />
        <Container className={classes.container}>
          <Component />
        </Container>
        <Footer />
      </Fragment>
    );
  };
}
