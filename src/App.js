import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContextProvider from './Context.js';
import Cart from './Components/Cart.js';
import Checkout from './Components/Checkout.js';
import Home from './Components/Home.js';
import Info from './Components/Info.js';
import Navbar from './Components/Navbar.js';
import Podcast from './Components/Podcast.js';
import Music from './Components/Music.js';
import Movie from './Components/Movie.js';
import EBook from './Components/EBook.js';

function App() {
  return (
    <div className="App col">
      <ContextProvider>
        <BrowserRouter>
          <Navbar/>

          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Cart' exact={true} component={Cart}/>
            <Route path='/Checkout' exact={true} component={Checkout}/>
            <Route path='/Info/:itemName' exact={true} component={Info}/>
            <Route path='/Podcast' exact={true} component={Podcast}/>
            <Route path='/Music' exact={true} component={Music}/>
            <Route path='/Movie' exact={true} component={Movie}/>
            <Route path='/EBook' exact={true} component={EBook}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;