import { useRouter } from "next/router";
import { useState } from "react";
import WithNavFooter from "../../src/WithNavFooter";
import { Fragment } from "react";
import {
  Card,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider,
  Collapse,
  ListItemSecondaryAction,
  Checkbox,
  LinearProgress,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  ExpandMore,
  ExpandLess,
  LabelOutlined,
  CheckOutlined,
  ShareOutlined
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  headerCard: {
    padding: theme.spacing(3),
    position: "relative"
  },
  checkIcon: {
    color: "green"
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  progressPercentage: {
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    padding: theme.spacing(0.5, 1.5),
    top: 0,
    right: 20,
    borderRadius: "0 0 8px 8px",
    display: "flex",
    alignItems: "center"
  },
  shareIcon: {
    marginRight: "5px",
    fontSize: "15px"
  }
}));

function Course() {
  const router = useRouter();
  const { id } = router.query;
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const typographyProps = { primaryTypographyProps: { variant: "body2" } };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Card className={classes.headerCard}>
        <Typography variant="h6">
          Python Hero: Full Course with Projects
        </Typography>
        <Typography variant="body1">
          Most Comprehensive Python 3 Course to bring you at expert level from
          Zero
        </Typography>
        <Typography variant="caption" className={classes.progressPercentage}>
          <ShareOutlined fontSize="small" className={classes.shareIcon} /> 85%
          Completed
        </Typography>
        <LinearProgress
          value={85}
          variant="determinate"
          className={classes.divider}
        />
        <Typography variant="body1">Course Syllabus</Typography>
        <List component="nav">
          <ListItem button onClick={handleClick} disableGutters>
            <ListItemIcon>
              <LabelOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Introduction and Getting the Basics Right"
              {...typographyProps}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <CheckOutlined className={classes.checkIcon} />
                </ListItemIcon>
                <ListItemText primary="Starred" {...typographyProps} />
                <ListItemSecondaryAction>
                  <Checkbox size="small" />
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Card>
    </Fragment>
  );
}

export default WithNavFooter(Course);
