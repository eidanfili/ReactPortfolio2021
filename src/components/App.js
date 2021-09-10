import '../../src/styles/App.scss';
import Navbar from './NavBar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route component={Home} exact path="/"/>
        <Route component={Portfolio} path="/portfolio"/>
        <Route component={Contact} path="/contact"/>
      </Switch>
    </Router>
  );
}

export default App;
