import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Notfound from "./notfound.js";
import Home from '../Home.js';

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="95%" maxWidth={1500} >
            {routing}
        </Box>
      </Grid>
    );
  }
}

export default withStyles(styles)(Routing);
