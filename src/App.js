import './App.css';
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Drafts from './components/pages/Drafts/Drafts'
import Footer from './components/footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Router>
    <Nav/>
      <Switch>
        <Route exact path="/home">
            <Home/>
        </Route>
        <Route  exact path="/drafts">
            <Drafts/>
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
