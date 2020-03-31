import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box
} from "@material-ui/core";
import Link from "./Link";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  mainNav: {
    padding: theme.spacing(1, 3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  link: {
    marginLeft: theme.spacing(2)
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container className={classes.mainNav}>
        <Box>
          <Typography variant="h5">Dashboard</Typography>
          <Typography variant="caption">Xord.One Development Portal</Typography>
        </Box>
        <Box>
          <Link href="/dashboard" color="inherit" className={classes.link}>
            Home
          </Link>
          <Link href="/course/asad" color="inherit" className={classes.link}>
            My Courses
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
}
