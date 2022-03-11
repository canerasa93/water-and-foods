
import TranslatedText from './components/translated-text/TranslatedText'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TranslatedText label="GLOBAL.TEST" />
        </p>
      </header>
    </div>
  );
}

export default App;
