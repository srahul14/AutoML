import React, { Component } from "react";
import "./css/App.css";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import AuthRoute from "./router/AuthRoute";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Sky from "react-sky";
import ml1 from "./background-images/ml1.png";
import ml2 from "./background-images/ml2.png";
import ml3 from "./background-images/ml3.png";
import ml4 from "./background-images/ml4.png";
import ml5 from "./background-images/ml5.png";
import ml6 from "./background-images/ml6.png";
import ml7 from "./background-images/ml7.png";
import ml8 from "./background-images/ml8.png";
import ml9 from "./background-images/ml9.png";
import ml10 from "./background-images/ml10.png";
import Faq from "./components/Faq/Faq";

class App extends Component {
  render() {
    return (
      <>
        <Sky
          images={{
            0: ml1,
            1: ml2,
            2: ml3,
            3: ml4,
            4: ml5,
            5: ml6,
            6: ml7,
            7: ml8,
            8: ml9,
            9: ml10,
          }}
          how={
            60
          } /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={"60px"} /* size of the rendered images */
          background={"palettedvioletred"} /* color of background */
        />
        <div className="root">
          <Router>
            <Switch>
              <AuthRoute
                path="/home"
                type="private"
                render={(props) => (
                  <Navigation {...props.history.location.state} />
                )}
              ></AuthRoute>

              <AuthRoute path="/faq">
                <Faq />
              </AuthRoute>
              {/* <AuthRoute path="/login" type="guest">
            <LoginPage />
          </AuthRoute> */}
              {/* <AuthRoute path="/my-account" type="private">
            <MyAccount />
          </AuthRoute> */}

              <AuthRoute path="/signup" type="guest">
                <Signup />
              </AuthRoute>
              <AuthRoute path="/" type="guest">
                <Signin />
              </AuthRoute>
              {/* <Route path="/" render={Signin} /> */}
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
