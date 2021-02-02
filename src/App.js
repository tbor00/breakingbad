import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Characters from "./pages/character.js";
import Episodes from "./pages/episodes.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
      </Switch>
    </Router>
  );
}

export default App;
