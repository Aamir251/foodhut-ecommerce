import Header from './components/Header';
import Home from './components/Home/Home';
import Features from './components/Home/Features';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import ProductScreen from './components/Screens/ProductScreen';
import CartScreen from './components/Screens/CartScreen';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import ShippingScreen from './components/Screens/ShippingScreen';
import CheckOutSteps from './components/CheckOutSteps';
import PaymentScreen from './components/Screens/PaymentScreen';
import PlaceOrderScreen from './components/Screens/PlaceOrderScreen'; 
import OrderScreen from './components/Screens/OrderScreen'; 

const App = () => {
  return <Router>
    <Header />
    <Switch>
    <Route exact path="/">
        <Home/>
        <Features/>
    </Route>
    <Route exact path="/menu">
      <Menu />
    </Route>
    <Route path="/menu/:id">
      <ProductScreen/>
    </Route>
    <Route path="/cart/:id?">
      <CartScreen/>
    </Route>
    <Route path="/login">
      <LoginScreen/>
    </Route>
    <Route path="/profile">
      <ProfileScreen/>
    </Route>
    <Route path="/register">
      <RegisterScreen/>
    </Route>
    <Route path="/shipping">
      <ShippingScreen/>
    </Route>
    
    <Route path="/payment">
      <PaymentScreen/>
    </Route>
    <Route path="/placeorder">
      <PlaceOrderScreen />
    </Route>
    <Route path="/order/:id">
      <OrderScreen/>
    </Route>
   
    
    </Switch>
  </Router>
}

export default App;
