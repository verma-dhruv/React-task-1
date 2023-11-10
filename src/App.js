import logo from './logo.svg';
import './App.css';
import WordCounter from './WordCounter';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        
        <h1>Responsive Paragraph Word Counter</h1>
        <WordCounter /> {/* Add the WordCounter component here */}
      </header>
    </div>
  );
}


export default App;
