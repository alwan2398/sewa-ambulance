import { sideUp } from "@/lib/animate";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section id="#contact" className="bg-[#f9f9f9] mt-4">
      <div className="container py-4">
        <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-primary before:h-full max-md:before:hidden">
          <div>
            <h2 className="text-gray-800 text-3xl font-extrabold">
              Contact Kami
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              hubungi kami melalui contact ini dan kami akan segera merespon
              dengan cepat
            </p>

            <form>
              <div className="space-y-4 mt-8">
                <motion.input
                  variants={sideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                  type="text"
                  placeholder="Nama Lengkap"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary outline-none"
                />
                <motion.input
                  variants={sideUp(0.6)}
                  initial="hidden"
                  whileInView={"visible"}
                  type="text"
                  placeholder="Alamat"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary outline-none"
                />
                <motion.input
                  variants={sideUp(0.7)}
                  initial="hidden"
                  whileInView={"visible"}
                  type="email"
                  placeholder="Email atau No Handphone"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary outline-none"
                />
                <motion.textarea
                  variants={sideUp(0.8)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary outline-none"
                  placeholder="Pesan Text"
                />
              </div>
              <Button className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3">
                Hubungi Kami
              </Button>
            </form>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[350px]">
            <motion.iframe
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3966.126174046083!2d107.00012219999998!3d-6.24709939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1727418709154!5m2!1sid!2sid"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameBorder={0}
            ></motion.iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
