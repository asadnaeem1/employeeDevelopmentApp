import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import { gitAuthLogin } from "../src/utils";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    textAlign: "center",
    color: "#f7f7f7"
  },
  title: {
    margin: theme.spacing(2, 0, 8, 0)
  },
  icon: {
    fontSize: "20px",
    marginRight: "10px"
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.innerContainer}>
        <img src="/assets/logo.png" width="200px" />
        <Typography variant="h5" className={classes.title}>
          EMPLOYEE DEVELOPMENT PORTAL
        </Typography>
        <Button onClick={gitAuthLogin} variant="contained" color="primary">
          <GitHub className={classes.icon} />
          Login With Github
        </Button>
      </Box>
    </Box>
  );
}
