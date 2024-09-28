import { motion } from "framer-motion";
import { useState } from "react";
const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <motion.div className="bg-gradient-to-br from-primary to-red-400 text-white text-center font-semibold p-1 hidden md:block relative">
        Kami Siap Melayani dan Membantu Pasien Yang Membutuhkan
        <span> & Gawat Darurat</span>
        <div
          onClick={() => setIsOpen(false)}
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
