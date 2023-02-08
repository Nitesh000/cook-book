import { motion, spring } from "framer-motion";
import { FoodCarousel } from "./FoodCarousel";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center -z-10">
        <FoodCarousel />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        transition={spring}
        className="absolute z-20 bottom-10 mx-[200px] rounded-tl-md rounded-br-md"
      >
        <h1 className="text-4xl font-bold text-center bg-cyan-500 px-4 py-2">
          Delicious cooking recipes
        </h1>
        <p className="bg-pink-500 px-4 py-1">Never more</p>
      </motion.div>
    </>
  );
};

export default Hero;
