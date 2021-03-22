import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route path="/playLists/:playList/:song" component='' />
        <Route path="/playLists/:playList" component='' />
        <Route path="/playLists" component='' />
        <Route path="/otherUsers/:user" component='' />
        <Route path="/otherUsers" component='' />
        <Route path="/:userId" component='' />
        <Route path="/upload" component='' />
        <Route path="/search" component='' />
        <Route path="/login" component='' />
        <Route path="/register" component='' />
        <Route path="/" exact component='' />
        <Route component='' />
      </Switch>

    </Router >

  );
}

export default App;
