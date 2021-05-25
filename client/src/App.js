import Header from './components/Header';
import Home from './components/Home/Home';
import Features from './components/Home/Features';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import ProductScreen from './components/Screens/ProductScreen';

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
    <Route path="/menu/:id" children={ProductScreen}>
    </Route>
    </Switch>
  </Router>
}

export default App;
