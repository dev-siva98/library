import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UserHome from "./Components/Home/UserHome";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
