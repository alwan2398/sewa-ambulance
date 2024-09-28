import { AnimatePresence, motion } from "framer-motion";

const MobileNav = ({ isOpen }) => {
  return (
    <motion.div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
          >
            <div className="text-xl font-semibold uppercase bg-red-500 text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col justify-center items-center gap-5">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileNav;
