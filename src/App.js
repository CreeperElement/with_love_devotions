import logo from './logo.svg';
import './App.css';
import db from './firestore';

function App() {
  db.collection("devotions").onSnapshot(snapshot => {
    snapshot.docs.forEach(document => console.log(document.data().body))
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
