// React
import { useState } from "react";
import { useHistory } from "react-router-dom";
//Material UI
import { makeStyles, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const CenteredTabs = ({ tabValue, tab1, tab2 }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(tabValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    newValue === 0 ? history.push("/home") : history.push("/algorithms");
  };

  return (
    <Tabs
      className={classes.root}
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label={tab1} />
      <Tab label={tab2} />
    </Tabs>
  );
};

export default CenteredTabs;
