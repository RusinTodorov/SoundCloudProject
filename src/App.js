import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import InitialPage from './components/Initial Page/InitialPage';
import Users from './components/Users';
import Search from './components/Search';
import Upload from './components/Upload';
import PageNotFound from './components/PageNotFound';
import SingleTrack from './components/Single Track';
import MyProfile from './components/MyProfile/MyProfile';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Users" component={Users} />
        <Route path="/Tracks/:trackId" component={SingleTrack} />
        <Route path="/MyProfile" component={MyProfile} />
        <Route path="/Upload" component={Upload} />
        <Route path="/Home" component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/" exact component={InitialPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router >
  );
}

export default App;