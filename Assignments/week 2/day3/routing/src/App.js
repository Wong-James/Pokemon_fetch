import './App.css';
import { Router } from '@reach/router'
import Home from './components/home';
import Value from './components/value';
import Values from './components/value_with_colors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home'/>
        <Value path='/:value'/>
        <Values path='/:value/:text/:background'/>
      </Router>
    </div>
  );
}

export default App;
