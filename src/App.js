import './App.css'

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

import Navbar from './components/navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
      <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/search' element={<Search/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App
