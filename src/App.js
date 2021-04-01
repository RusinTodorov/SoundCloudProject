import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Sign In/SignIn';
import CreateAccount from './components/Create Account/CreateAccount';
import Home from './components/Home/Home';
import InitialPage from './components/Initial Page/InitialPage';
import Users from './components/Users/Users';
import Search from './components/Search Results/Search';
import Upload from './components/Upload/Upload';
import PageNotFound from './components/Page Not Found/PageNotFound';
import SingleTrack from './components/Single Track';
import MyProfile from './components/My Profile/MyProfile';
import UserProfile from './components/User Profile/UserProfile';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Users/:userId" component={UserProfile} />
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