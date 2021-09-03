import { React } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScheduledResults from "./components/ScheduledTestResults";
import IndependentResults from "./components/IndependentTestResults";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/scheduled" render={() => <ScheduledResults />} />
          <Route exact path="/" render={() => <IndependentResults />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
