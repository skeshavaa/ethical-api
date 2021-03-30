import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Docs from './views/Docs';
import GetStarted from './views/GetStarted';

import "./styles/index.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col mx-0 justify-start h-screen">
        <header className="container min-w-full px-4 flex flex-row justify-end">
          <Link to='/docs' href="/" className="m-5 text-lg hover:opacity-50">
            Documentation
          </Link>
          <Link to="/guide" className="m-5 text-lg hover:opacity-50">
            Get Started
          </Link>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/docs" render={() => <Docs/>}/>
          <Route path="/guide" render={() => <GetStarted/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
