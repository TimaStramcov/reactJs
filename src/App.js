import logo from './logo.svg';
import './App.css';
import Message from './Message';

const yourName = 'Tima';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <Message name={yourName}/>
        </p>
      </header>
    </div>
  );
}

export default App;
