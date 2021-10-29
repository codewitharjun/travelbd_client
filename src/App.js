import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
import SignUp from './Components/LogIn/Signup/Signup';
import Login from './Components/LogIn/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Packages from './Components/Home/Packages/Packages';
import Package from './Components/Home/Package/Package';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/package">
            <Package></Package>
          </Route>
          <Route path="/register">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
