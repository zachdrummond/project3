// React
import React from "react";
// Material UI
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  makeStyles,
  Slide,
  Typography,
} from "@material-ui/core";
//File Modules
import Person from "./Person";
// Images
import Zach from "../../images/Zach.jpg";
import Calvin from "../../images/Calvin.jpg";
import Andrew from "../../images/Andrew.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: "bold",
  },
  divider: {
    marginBottom: "15px",
  }
}));

const team = [
  {
    name: "Zach Drummond",
    image: { Zach },
    gitHub: "https://github.com/zachdrummond",
    linkedIn: "https://www.linkedin.com/in/zachdrummond/",
    email: "mailto: zachdrummond3@gmail.com",
  },
  {
    name: "Calvin Griffin",
    image: { Calvin },
    gitHub: "https://github.com/cgriffin332",
    linkedIn: "https://www.linkedin.com/in/calvin-griffin-8247521b7/",
    email: "mailto: cgriffin332@gmail.com",
  },
  {
    name: "Joseph Perry",
    image: { Zach },
    gitHub: "https://github.com/dgtlctzn",
    linkedIn: "https://www.linkedin.com/in/joseph-perry-6650653a/",
    email: "mailto: josephperry720@gmail.com",
  },
  {
    name: "Andrew Stewart",
    image: { Andrew },
    gitHub: "https://github.com/stewdiostash",
    linkedIn: "https://www.linkedin.com/in/andrewstewartwork/",
    email: "mailto: 1andrewstewart@gmail.com",
  },
];

export default function MeetTheTeam() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button size="small" variant="outlined" color="inherit" onClick={handleClickOpen}>
        Meet The Team
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <Typography align="center" variant="h4" className={classes.bold}>
            Our Team - Fullstack Web Developers
          </Typography>
          <Divider className={classes.divider}/>
          <Grid container spacing={2} align="center">
            {team.map(({name, image, gitHub, linkedIn, email}) => {
            return <Person name={name} image={Zach} gitHub={gitHub} linkedIn={linkedIn} email={email}/>
          })}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
