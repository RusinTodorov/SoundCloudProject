import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Footer from './components/Initial Page/Footer/Footer';
import SingIn from './components/SingIn';
import CreateAccount from './components/CreateAccount';
import Home from './components/Home/Home';
import InitialPage from './components/Initial Page/InitialPage';
import Users from './components/Users';
import Search from './components/Search';
import Upload from './components/Upload';
import PageNotFound from './components/PageNotFound';

function App() {
  
  return (
    <Router>
      {/*<Header />*/}
      <Switch>
        <Route path="/Search" component={Search} />
        <Route path="/Users" component={Users} />
        <Route path="/Upload" component={Upload} />
        <Route path="/Home" component={Home} />
        <Route path="/SingIn" component={SingIn} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/" exact component={InitialPage} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <Footer /> */}
    </Router >
  );
}

export default App;
