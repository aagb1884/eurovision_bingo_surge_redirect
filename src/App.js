import './App.css';
import Container from './Containers/container';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //NEW
import HomePage from './Components/Home';
import BingoCard from './Components/bingo_card';

function App() {

  return (
    <div classname="app">
    <Router>
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/bingo" element={< BingoCard/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
