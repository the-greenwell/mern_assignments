import logo from './logo.svg';
import './App.css';
import Title from './Title.js';
import List from './List.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <img src={logo} className="App-logo" alt="logo" />
        <List />
      </header>
    </div>
  );
}

export default App;
