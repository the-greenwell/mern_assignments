import logo from './logo.svg';
import { Data } from './components/Data';
import { Search } from './components/Search';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container-md">
        <h1>Luke APIwalker</h1>
        <Search />
        <Routes>
          <Route path="/:category/:id" element={<Data />}/>
        </Routes>
    </div>
  );
}

export default App;

// people-83 planets-60 starships-17 species-37 films-6 vehicles-60