import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#2e2e2e",
    color: "#f7f7f7",
    padding: theme.spacing(3),
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    width: "100vw"
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography variant="caption">
        <b>All Right Reserves - 2020</b>
      </Typography>
    </Box>
  );
}
