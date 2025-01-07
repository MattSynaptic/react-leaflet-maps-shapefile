import logo from './logo.svg';
import './App.css';
import MyMap from './components/Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> React Maps Shapefile
      </header>
      <MyMap />
    </div>
  );
}

export default App;
