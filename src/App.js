import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home/Home';
import Login from './Components/LogIn/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Packages from './Components/Home/Packages/Packages';
import Package from './Components/Home/Package/Package';
import News from './Components/Home/News/News';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/LogIn/PrivetRouter/PrivetRouter';
import './App.css';
import PackageDetails from './Components/Home/PackageDetails/PackageDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path="/news">
              <News></News>
            </Route>
            <Route path="/package">
              <Package></Package>
            </Route>
            <PrivateRoute path="/details/:detailsId">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
