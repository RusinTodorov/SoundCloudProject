import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from './services/firebase';
import Header from './components/Header/';
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
import TrackBar from './components/TrackBar';
import Upload from './components/Upload/Upload';
import { DATA as TRACKS_DATA } from './data/Tracks/data';
import { DATA as USERS_DATA } from './data/Users/data';
import { addAllTracks } from './redux/AllTracks/allTracks.action';
import { addAllUsers, addUser } from './redux/AllUsers/allUsers.actions';
import { loginUser } from './redux/CurrentUser/currentUser.actions';
import store from './redux/store';

function App() {
  const location = useLocation();

  let page = location.pathname;

  const id = useSelector(state => state.track.id);
  const allTracks = useSelector(state => state.allTracks);
  const allUsers = useSelector(state => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allTracks.length === 0) {
      dispatch(addAllTracks(TRACKS_DATA))
    }

    if (allUsers.length === 0) {
      dispatch(addAllUsers(USERS_DATA))
    }

    firebase.auth().onAuthStateChanged(function (currUser) {
      let users = store.getState().allUsers;

      if (currUser) {
        // User is signed in.
        let userObj = {
          id: currUser.uid,
          name: currUser.displayName,
          uploads: [],
          likes: [],
        }
        
        if (!users.some(user => user.id === currUser.uid)) {
          dispatch(addUser(userObj))
        }

        dispatch(loginUser(userObj))
      }

    });
  }, []);

  return (
    <>
      {page !== '/' && <Header />}
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