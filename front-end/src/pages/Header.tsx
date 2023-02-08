import { Link } from "react-router-dom";
import Button from "../components/Button";

type Props = {
  current: String;
};

const Header = ({ current }: Props) => {
  return (
    <header className="flex justify-between bg-four/75 max-w-7xl mx-auto rounded-2xl">
      <h1 className="px-4 py-4 text-2xl text-two font-bold tracking-wider hover:text-one/80 hover:cursor-pointer">
        <Link to="/">COOK-BOOK</Link>
      </h1>
      <div className="flex justify-center items-center gap-3 mx-3">
        <Button position={current} />
        <a
          className="text-two hover:cursor-pointer hover:animate-pulse"
          href="#about"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-two hover:cursor-pointer hover:animate-pulse"
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
