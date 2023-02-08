import { useNavigate } from "react-router-dom";

type Props = {
  position: String;
};

const Button = ({ position }: Props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (position == "login") {
          navigate("/singin");
        } else {
          navigate("/login");
        }
      }}
      className="px-4 py-2 bg-gray-500 rounded-xl text-two/60 hover:bg-two/50 hover:text-black hover:animate-pulse"
    >{`${position == "login" ? "SignUp" : "Login"}`}</button>
  );
};

export default Button;
