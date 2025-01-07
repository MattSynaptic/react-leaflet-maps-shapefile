import logo from './logo.svg';
import './App.css';
import MapElement from './components/MapElement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> React Maps Shapefile
      </header>
      <MapElement/>
    </div>
  );
}

export default App;
