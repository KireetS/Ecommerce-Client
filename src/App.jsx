import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-col  min-h-screen min-w-screen ">
        <div className="h-14">
          <Navbar />
        </div>

        <div className="h-screen flex">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
