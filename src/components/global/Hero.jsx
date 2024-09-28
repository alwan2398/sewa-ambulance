import { sideRight } from "@/lib/animate";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[600px] py-8 relative grid grid-cols-1 md:grid-cols-2 container"
    >
      <div className="flex flex-col justify-center md:pr-16 xl:pr-40 py-8 md:py-0">
        <div className="text-center md:text-left space-y-4">
          <motion.p
            variants={sideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="font-semibold text-red-600 text-lg uppercase"
          >
            Siap untuk anda yang membutuhkan
          </motion.p>
          <motion.h1
            variants={sideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-5xl font-bold"
          >
            Sewa Ambulance Cepat & Tepat, Siaga 24 Jam untuk Kesehatan Anda!
          </motion.h1>
          <motion.p
            variants={sideRight(0.8)}
            initial="hidden"
            animate="visible"
            className="text-foreground"
          >
            Kami hadir dengan pelayanan terbaik dan respons cepat untuk
            kebutuhan darurat medis Anda, kapan saja dan di mana saja.
          </motion.p>
          <motion.div
            variants={sideRight(1)}
            initial="hidden"
            animate="visible"
          >
            <Button>Hubungi Sekarang</Button>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
          src="https://i.pinimg.com/564x/d7/ac/f7/d7acf74579083ce454e1c4d18fb53587.jpg"
          alt="hero"
          loading="lazy"
          className="rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
