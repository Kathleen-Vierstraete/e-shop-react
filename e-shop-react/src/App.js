import './App.css';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />

        <Homepage />

        <Footer />
      </Router>
    </div>
  );
}

export default App;

