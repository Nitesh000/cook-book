import { useState } from "react";
import { NavLink } from "react-router-dom";
import LabelBox from "../components/LabelBox";
import Header from "./Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <Header current="login" />
      <div className="flex flex-col mx-auto justify-center items-center w-1/2 bg-four mt-20 rounded-xl py-10">
        <h2 className="text-two font-bold tracking-wider text-2xl">Login</h2>
        <form
          className="flex flex-col items-center justify-center my-8"
          onSubmit={formSubmitHandler}
        >
          <LabelBox
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelBox
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-gray-500 rounded-xl text-two/60 hover:bg-two/50 hover:text-black hover:animate-pulse"
            type="submit"
          >
            Login
          </button>
          <p>
            Don't have an account!{" "}
            <NavLink className="text-blue-400" to="/singin">
              click here
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
