import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
 
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CourseCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

//   For Rating
    const [value, setValue] = React.useState(2);

  return (
    <Card className={classes.root} style={{float: "left", margin: "0 1rem 0 1rem"}}>
      <CardMedia
        className={classes.media}
        image="./images/machine-learning.png"
        title="Course"
      />
      <CardContent>
        <Typography variant="body3" color="textSecondary" component="h4">
          The Fundamentals of Machine Learning...blah blah blah blah blah (lol)
        </Typography>
        <Typography variant="body5" color="textSecondary" component="code">
          L.S.B. Leakey
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={value} readOnly />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <h6> 2.5</h6>
        </Box>
      </CardActions>
    </Card>
  );
}