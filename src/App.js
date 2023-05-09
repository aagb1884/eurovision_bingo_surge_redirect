import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //NEW
import HomePage from './Components/Home';
import BingoCard from './Components/bingo_card';
import HowToPlay from './Components/how_to_play';

function App() {

  return (
    <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/bingo" element={< BingoCard/>}/>
        <Route path="/howtoplay" element={< HowToPlay />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
