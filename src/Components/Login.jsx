import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [status, setStatus] = useState(false);
  const [errorstatus, setErrorStatus] = useState(false);
  const log = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setStatus(true);
        setTimeout(() => {
          setStatus(false);
        }, 7000);
        setMail("");
        setPass("");
      } else {
        setErrorStatus(true);
        setTimeout(() => {
          setErrorStatus(false);
        }, 7000);
      }
    } catch (err) {
      console.error("error while logging in ", err);
      setErrorStatus(true);
      setTimeout(() => {
        setErrorStatus(false);
      }, 7000);
    }
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-800">
        {status && (
          <div
            className="flex items-center justify-center bg-blue-500 text-white text-sm font-bold px-4 py-3 my-10 w-[50%] transition-all"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Login Success.</p>
          </div>
        )}
        {errorstatus && (
          <div
            className="flex items-center justify-center bg-red-500 text-white text-sm font-bold px-4 py-3 my-10 w-[50%] transition-all"
            role="alert"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>Login Failed.</p>
          </div>
        )}
        <div className="h-auto min-h-[50%] w-[30%] rounded-lg bg-slate-950 flex items-center justify-center flex-col">
          <h1 className="text-5xl text-white font-bold  my-10">Login</h1>
          <form
            action="POST"
            className="flex w-full items-center justify-center flex-col "
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="Enter Email.."
              className="flex p-2 text-white bg-slate-800 rounded-lg w-[70%] my-3 mx-2"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Enter Password..."
              className="flex p-2 text-white bg-slate-800 rounded-lg w-[70%] my-3 mx-2"
            />
          </form>
          <button
            onClick={log}
            className="bg-blue-500 my-4  text-white font-semibold p-2 rounded-lg "
          >
            Sign In{" "}
          </button>

          <Link to="/forgot-password">
            <h1 className="underline text-blue-400">
              Forgot Password ? Click Here
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
