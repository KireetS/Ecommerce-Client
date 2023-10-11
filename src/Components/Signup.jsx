import React, { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [password, setPass] = useState("");
  const [status, setStatus] = useState(false);
  const signup = async () => {
    try {
      await axios.post("http://localhost:4000/api/auth/create", {
        email,
        name,
        password,
      });
      setStatus(true);
      setTimeout(() => {
        setStatus(false);
      }, 7000);
      setName("");
      setMail("");
      setPass("");
    } catch (err) {
      console.error(error);
    }
  };
  return (
    <>
      <div className=" h-full w-full  bg-slate-800 flex flex-col items-center justify-center">
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
            <p>Sign Up Success Log In Now.</p>
          </div>
        )}
        <div className="min-h-[50%] w-[38%] box-border bg-slate-950 flex flex-col items-center justify-center rounded-lg ">
          <div className="text-4xl font-bold justify-center items-center flex text-white my-6 mx-2">
            Sign Up
          </div>

          <form
            action="POST"
            className="items-center w-[60%] justify-center flex flex-col"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full rounded-lg focus:outline-none text-white p-2 my-4 mx-3 bg-slate-700"
              placeholder="Enter Name Here..."
            />

            <input
              type="text"
              value={email}
              className="w-full rounded-lg focus:outline-none text-white p-2 my-4 mx-3 bg-slate-700"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="Enter the email here..."
            />

            <input
              type="text"
              value={password}
              className="w-full rounded-lg focus:outline-none text-white p-2 my-4 mx-3 bg-slate-700"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Enter the password ..."
            />
          </form>
          <div className="p-3">
            <button
              onClick={signup}
              className="bg-blue-500 text-white font-semibold p-4 rounded-lg "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
