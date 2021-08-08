import React, { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Grow from "@material-ui/core/Grow";
import ControlDashboard from "../ControlDashboard/ControlDashboard";

const Home = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Grow in={true}>
      <div className="App">
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <img width="150" height="150" src="../logo.png" />
        </Grid>

        {!props.isLanding && (
          <ControlDashboard setTab={props.setTab}></ControlDashboard>
        )}

        <br />
        <hr />

        <br />
        <br />
        <br />
        {props.isLanding && (
          <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Fab
              variant="extended"
              aria-label="add"
              fullWidth
              onClick={() => {
                setShow(!show);
              }}
            >
              What is AutoML?
            </Fab>
            {show ? (
              <p>
                BlackBox Machine Learning is an online platform that uses an
                ensemble of state-of-the-art AutoML systems to find the best
                model to describe your data. AutoML is a technique for
                intelligently trying and selecting models in order to perform
                predictions, regressions, and classifications. The models
                considered in this ensemble range from artificial neural
                networks to simple linear regression, and everything in between
                such as random forests, support vector machines, and principal
                component analysis. Once our system has found a best model, you
                can use it for lightning fast inference of any future samples of
                your dataset.
              </p>
            ) : null}
          </Grid>
        )}
      </div>
    </Grow>
  );
};

Home.propTypes = {
  isLanding: PropTypes.bool,
  setTab: PropTypes.func,
};

export default Home;
