import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import SignUpPageContainer from "./SignUpPageContainer";
import SignUpFormContainer from "./forms/SignUpFormContainer";
import BrowseContainer from "./browse/BrowseContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />;
      <Route exact path="/login" component={LoginPage} />;
      <Route exact path="/signup/form" component={SignUpFormContainer} />;
      <Route exact path="/signup" component={SignUpPageContainer} />;
      <Route exact path="/browse" component={BrowseContainer} />;
    </Switch>
  );
};

export default App;
