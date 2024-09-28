import { myServices } from "@/constants";
import { sideLeft } from "@/lib/animate";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section id="service" className="bg-[#f0fafc]">
      <div className="container py-24">
        <div className="p-6 space-y-4 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-primary">Our Services</h1>
          <h1 className="text-2xl font-semibold">
            Layanan Kami yang Siap Mendukung Anda dalam Keadaan Darurat!
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {myServices.map((item) => (
            <motion.div
              variants={sideLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              key={item.id}
              className="p-6 space-y-4 rounded-xl shadow-md bg-white"
            >
              <div
                style={{ backgroundColor: item.bgColor }}
                className="flex justify-center items-center h-10 w-10 rounded-lg text-white"
              >
                <div>
                  <item.icon />
                </div>
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
