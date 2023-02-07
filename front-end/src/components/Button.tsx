type Props = {
  position: String;
};

const Button = ({ position }: Props) => {
  return <button>{`${position == "login" ? "SignUp" : "Login"}`}</button>;
};

export default Button;
