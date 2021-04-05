import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './components/Sign In/SignIn';
import CreateAccount from './components/Create Account/CreateAccount';
import Home from './components/Home/Home';
import InitialPage from './components/Initial Page/InitialPage';
import Users from './components/Users/Users';
import Search from './components/Search Results/Search';
import PageNotFound from './components/Page Not Found/PageNotFound';
import SingleTrack from './components/Single Track';
import MyProfile from './components/My Profile/MyProfile';
import UserProfile from './components/User Profile/UserProfile';
import TrackBar from './components/TrackBar'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DATA from './data/Tracks/data'
import Upload from './components/Upload/Upload'

import {
  addAllTracks,
} from './redux/AllTracks/allTracks.action'
import Header from './components/Header/';

function App() {
  const page = useSelector(state => state.path)

  const id = useSelector(state => state.track.id);
  const allTracks = useSelector(state => state.allTracks)
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTracks.length === 0) {
      dispatch(addAllTracks(DATA))
    }
    // dispatch fetchUser
  }, [])


  return (
    <>
      {page && <Header />}
      <Switch>
        <Route path="/search/:input" component={Search} />
        <Route path="/users/:userId" component={UserProfile} />
        <Route path="/users" component={Users} />
        <Route path="/tracks/:trackId" component={SingleTrack} />
        <Route path="/myProfile" component={MyProfile} />
        <Route path="/home" component={Home} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/" exact component={InitialPage} />
        <Route path="/upload" exact component={Upload} />
        <Route component={PageNotFound} />
      </Switch>
      {id && <TrackBar />}
    </>
  );
}

export default App;