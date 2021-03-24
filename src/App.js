import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home Page/Home'

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route path="/Users/:user" component='' />
        <Route path="/Users" component='' />
        <Route path="/Upload" component='' />
        <Route path="/AllTracks" component='' />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Route path="/" exact component={Home} />
        <Route component='' />
      </Switch>
      {/* <Footer /> */}
    </Router >



  );
}

export default App;
