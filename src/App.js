import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import TaskListComponent from './components/TaskListComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/ }
        <HeaderComponent/>
        <TaskListComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
