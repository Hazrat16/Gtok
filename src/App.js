import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Careers from './Components/Careers/Careers';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Components/Home/Top';

function App() {
  return (
    <Router>
      <Top/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blogs />
          </Route>
          <Route path="/career">
            <Careers />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
