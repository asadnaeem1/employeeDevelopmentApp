import { useState, Fragment, useEffect } from "react";
import WithNavFooter from "../src/WithNavFooter";
import { connect } from "react-redux";
import {
  Container,
  Typography,
  Paper,
  Card,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Box,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ListOutlined, DeleteOutlineOutlined } from "@material-ui/icons";
import { useRouter, withRouter } from "next/router";
import SocialShareItem from "../src/components/SocialShareItem";
import { addCourse } from "../src/redux/actions";
import { gitGetAuthToken } from "../src/utils";

const useStyles = makeStyles(theme => ({
  paper: {
    color: "black",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  btn: {
    width: "100px",
    padding: theme.spacing(1, 2),
    margin: "0 0 1px 10px"
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f7f7f7"
    }
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

function Dashboard({ router: { query }, addCourse, currentCourses }) {
  const classes = useStyles();
  const router = useRouter();
  const [link, setLink] = useState("");

  const _setLink = ({ target: { value } }) => {
    setLink(value);
  };

  useEffect(() => {
    gitGetAuthToken(query.code);
  }, [query]);

  const [alertOpen, setAlertOpen] = useState(false);
  const handleClickOpen = () => {
    setAlertOpen(true);
  };
  const handleClose = () => {
    setAlertOpen(false);
  };

  const alertDialog = () => (
    <Dialog
      open={alertOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Delete Course"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action is not reversable. Your course progress will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Fragment>
      <Card className={classes.paper}>
        <Typography variant="h6">My Courses</Typography>
        <Divider className={classes.divider} />
        <Box display="flex" alignItems="flex-end" mt={1}>
          <TextField
            placeholder="URL"
            variant="outlined"
            size="small"
            fullWidth
            value={link}
            onChange={_setLink}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={addCourse}
          >
            <b>+ Add</b>
          </Button>
        </Box>
        <List>
          {/* {currentCourses.map(course => (
            <Fragment>
              <ListItem
                className={classes.listItem}
                onClick={_ => router.push("/course/asad")}
              >
                <ListItemIcon>
                  <ListOutlined />
                </ListItemIcon>
                <ListItemText
                  primary="Python Hero: Full Course with Projects"
                  secondary="Most Comprehensive Python 3 Course to bring you at expert level from Zero"
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleClickOpen}
                  >
                    <DeleteOutlineOutlined />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Fragment>
          ))} */}
          <ListItem
            className={classes.listItem}
            onClick={_ => router.push("/course/asad")}
          >
            <ListItemIcon>
              <ListOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Python Hero: Full Course with Projects"
              secondary="Most Comprehensive Python 3 Course to bring you at expert level from Zero"
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={handleClickOpen}
              >
                <DeleteOutlineOutlined />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem
            className={classes.listItem}
            onClick={_ => router.push("/course/asad")}
          >
            <ListItemIcon>
              <ListOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Python Hero: Full Course with Projects"
              secondary="Most Comprehensive Python 3 Course to bring you at expert level from Zero"
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteOutlineOutlined />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </List>
        {alertDialog()}
      </Card>
      <Card className={classes.paper}>
        <Typography variant="h6">Social</Typography>
        <Typography variant="body2">Motivate Others.</Typography>
        <Divider className={classes.divider} />
        <SocialShareItem />
        <SocialShareItem />
      </Card>
    </Fragment>
  );
}

const mapStateToProps = ({ currentCourses }) => ({ currentCourses });

export default WithNavFooter(
  connect(mapStateToProps, { addCourse })(withRouter(Dashboard))
);
