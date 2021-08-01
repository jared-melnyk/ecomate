import './App.css';
import Button from './button';



const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src="./sprout-logo-small.png" className="App-logo" alt="logo" />
        <h1>
          Jared's First Chrome Extension
        </h1>
        <Button />
      </header>
      <script src="./popup.js"></script>
    </div>
  );
}

export default App;
