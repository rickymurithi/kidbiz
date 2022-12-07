import logo from '../src/img/logo.png';
import "./App.css";
import "./index.css"
import Home from './components/Home'
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />  */}
        <Home/>
        {/* <About/> */}
      </header>
    </div>
  );
}

export default App;
