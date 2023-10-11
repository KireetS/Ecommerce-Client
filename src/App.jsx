import "./App.css";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-col  min-h-screen min-w-screen ">
        <div className="h-14 bg-slate-600"></div>

        <div className="h-screen flex">
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
