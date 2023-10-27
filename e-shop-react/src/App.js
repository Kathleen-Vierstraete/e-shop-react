import './App.css';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />

        <Homepage />
      </Router>
    </div>
  );
}

export default App;

