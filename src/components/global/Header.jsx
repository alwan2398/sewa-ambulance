import { navMenu } from "@/constants";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container py-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-2 font-bold">
          <img src="/logo.png" alt="logo" width="36" height="36" />
          <p className="text-2xl hidden md:block">Sewa Ambulance</p>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4 items-center">
            {navMenu.map((item) => (
              <li
                key={item.name}
                className="inline-block text-gray-900 text-sm xl:text-base py-1 px-2 xl:px-3
                hover:text-red-500 hover:font-bold transition-all duration-300"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:block">
          <Button className="rounded-full px-4 py-2">Hubungin Kami</Button>
        </div>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon className="h-8 w-8" />
        </div>
      </motion.div>
      <MobileNav isOpen={isOpen} />
    </>
  );
};

export default Header;
