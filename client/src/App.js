import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';

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
    </Switch>
  </Router>
}

export default App;
