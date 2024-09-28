import { sideUp } from "@/lib/animate";
import { motion } from "framer-motion";

const Banner = ({ image, tag, title, subtitle, href, reverse }) => {
  return (
    <section id="about" className="bg-[#f9f9f9] mt-4 pb-8">
      <div className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-y-0">
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last md:justify-end"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt="imgBanner"
              className="w-[400px] h-full object-cover rounded-xl mt-2"
              lazy="loading"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={sideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-primary font-semibold text-md capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={sideUp(0.6)}
              initial="hidden"
              whileInView={"visible"}
              className="text-lg lg:text-2xl font-semibold"
            >
              {title}
            </motion.p>
            <motion.p
              variants={sideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-foreground text-sm text-gray-500"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
