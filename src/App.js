import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Tasks from './Components/Task';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/home" element={<Tasks />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
