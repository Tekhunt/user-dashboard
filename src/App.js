import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./Components/Login";

function App() {
  const isAuthenticated = localStorage.getItem("user");
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route
            path='/'
            element={isAuthenticated ? <Navigate to='/dashboard' /> : <Login />}
          /> */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* <Route
            path='/dashboard'
            element={isAuthenticated ? <DashBoard /> : <Navigate to='/' />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
