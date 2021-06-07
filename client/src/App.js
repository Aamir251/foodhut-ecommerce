import Header from './components/Header';
import Home from './components/Home/Home';
import Features from './components/Home/Features';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import ProductScreen from './components/Screens/ProductScreen';
import CartScreen from './components/Screens/CartScreen';
import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';

const App = () => {
  return <Router>
    <Header />
    <Switch>
    <Route exact path="/">
      <main className='pt-3'>
        <Home/>
      </main>
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
    <Route path="/register">
      <RegisterScreen/>
    </Route>
    </Switch>
  </Router>
}

export default App;
