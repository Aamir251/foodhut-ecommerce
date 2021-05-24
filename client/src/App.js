import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';

const App = () => {
  return <>
    <Header />
    <main className='pt-3'>
      <Home/>
    </main>
    <Features/>
  </>
}

export default App;
