import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Home/Header/Header';
// import Footer from './components/Initial Page/Footer/Footer';
import SignIn from './components/SignIn/SignIn';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Home from './components/Home/Home';
import InitialPage from './components/Initial Page/InitialPage';
import Users from './components/Users';
import Search from './components/Search';
import Upload from './components/Upload';
import PageNotFound from './components/PageNotFound';
import SingleTrack from './components/Single Track'
import TrackBar from './components/TrackBar';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Users" component={SingleTrack} />
        <Route path="/Track" component={SingleTrack} />
        <Route path="/Upload" component={Upload} />
        <Route path="/Home" component={Home} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/bar" component={TrackBar} />
        <Route path="/" exact component={InitialPage} />
        <Route component={PageNotFound} />
      </Switch>
      <TrackBar />
      {/* <Footer /> */}
    </Router >
  );
}

export default App;
