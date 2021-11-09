import React from "react";
import { LandingPage } from "./LandingPage";
import { AppLayout } from "./TodoApp";
import { ProtectedRoute } from "./PrivateRoute";
import { LandingPage2 } from "./LandingPage2";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Landing" component={LandingPage2} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
