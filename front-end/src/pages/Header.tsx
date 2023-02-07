import { Link } from "react-router-dom";
import Button from "../components/Button";

type Props = {
  current: String;
};

const Header = ({ current }: Props) => {
  return (
    <header className="flex justify-between bg-four max-w-7xl mx-auto rounded-2xl">
      <h1 className="px-4 py-4 text-2xl text-two font-bold tracking-wider hover:text-one/80 hover:cursor-pointer">
        <Link to="/">COOK-BOOK</Link>
      </h1>
      <div>
        <Button position={current} />
        <a>About</a>
      </div>
    </header>
  );
};

export default Header;
