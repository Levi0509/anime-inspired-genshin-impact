import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Base from "./Base";
import Base2 from "./Base2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/Mobile">
            <Base2 />
          </Route>
          <Route path="/Default">
            <Base />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
