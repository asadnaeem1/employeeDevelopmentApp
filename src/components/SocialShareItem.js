import { makeStyles } from "@material-ui/styles";
import { Box, Typography, Divider } from "@material-ui/core";
import {
  ThumbUpOutlined,
  FavoriteBorderOutlined,
  ThumbDownOutlined,
  EmojiEmotionsOutlined
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  box: {
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    margin: theme.spacing(1),
    padding: theme.spacing(2)
  },
  courseCard: {
    backgroundColor: "white",
    position: "relative",
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    borderRadius: "8px"
  },
  courseProgress: {
    backgroundColor: theme.palette.primary.main,
    position: "absolute",
    padding: theme.spacing(0.2, 1.5),
    top: 0,
    right: 20,
    borderRadius: "0 0 8px 8px",
    display: "flex",
    alignItems: "center"
  },
  reactions: {
    color: "gray",
    cursor: "pointer",
    "& *": {
      fontSize: "20px",
      marginRight: "5px"
    },
    "& *:hover": {
      color: theme.palette.primary.main,
      transition: "all 0.3s ease",
      transform: "scale(1.2)"
    }
  },
  divider: {
    margin: theme.spacing(1.5, 0)
  }
}));

export default function SocialShareItem() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="body2">Asad Naeem</Typography>
      <Typography variant="caption">
        Check This Out i completed this course.
      </Typography>
      <Box className={classes.courseCard}>
        <Typography variant="caption" className={classes.courseProgress}>
          100% Completed
        </Typography>
        <Typography variant="body2">
          Python Hero: Full Course with Projects
        </Typography>
        <Typography variant="caption">
          Most Comprehensive Python 3 Course to bring you at expert level from
          Zero
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.reactions}>
        <ThumbUpOutlined />
        <FavoriteBorderOutlined />
        <ThumbDownOutlined />
        <EmojiEmotionsOutlined />
      </Box>
    </Box>
  );
}
