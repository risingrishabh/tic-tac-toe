import logo from './logo.svg';
import './App.css';
import { SmartHeading, DumbHeading } from './SmartHeading';
import SmartLogin from './SmartLogin';
import WelcomeHeading from './WelcomeHeading';
import Counter from './Counter';
import Board from './Board';

function App() {
  return (
    <div>
      <Board />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
