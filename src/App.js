import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from './pages/DashBoard';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
