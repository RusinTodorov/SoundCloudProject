import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';

function App() {
  return (

    <Router history={hashHistory}>
      <Switch>
          <Route path="/playLists/:playList/:song" component={PlaySong} />
          <Route path="/playLists/:playList" component={PlayList} />
          <Route path="/playLists" component={PlayLists} />
          <Route path="/otherUsers/:user" component={OtherUser} />
          <Route path="/otherUsers" component={OtherUsers} />
          <Route path="/:userId" component={User} />
          <Route path="/upload" component={Upload} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={Home} />
          <Route component={NotFoundRoute} />
      </Switch>

    </Router>

  );
}

export default App;
