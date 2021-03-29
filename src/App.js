import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home/Home';
import Users from './components/Users';
import Search from './components/Search';
import Upload from './components/Upload';
import PageNotFound from './components/PageNotFound';
import SingleTrack from './components/Single Track'

function App() {
  return (
    <Router>
      {/*<Header />*/}
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Users" component={Users} />
        <Route path="/Track" component={SingleTrack} />
        <Route path="/Upload" component={Upload} />
        <Route path="/Home" component={Home} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <Footer /> */}
    </Router >
  );
}

export default App;
