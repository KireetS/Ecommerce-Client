import "./App.css";
import ChangePassword from "./Components/ChangePassword";
import Forgotpass from "./Components/Forgotpass";
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
            <Route path="/forgot-password" element={<Forgotpass />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
