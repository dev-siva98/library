import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./Components/Home/UserHome";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
