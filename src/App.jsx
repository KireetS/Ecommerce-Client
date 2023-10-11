import "./App.css";
import Signup from "./Components/Signup";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="flex flex-col  min-h-screen min-w-screen ">
        <div className="h-14 bg-slate-600"></div>

        <div className="grow flex">
          <Signup />
        </div>
      </div>
    </>
  );
}

export default App;
