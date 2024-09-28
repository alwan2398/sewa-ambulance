import Banner from "./components/global/Banner";
import Contact from "./components/global/Contact";
import Header from "./components/global/Header";
import Hero from "./components/global/Hero";
import NavbarBanner from "./components/global/NavbarBanner";
import NumberContainer from "./components/global/NumberContainer";
import Service from "./components/global/service";
import WhatsappButton from "./components/global/WhatsappButton";

const bannerData = {
  image:
    "https://i.pinimg.com/564x/79/67/c2/7967c293693725753019d0e85fe3c9e5.jpg",
  tag: "Siap Siaga untuk Kesehatan dan Keselamatan Anda",
  title:
    "Penyedia layanan ambulans terpercaya dengan komitmen untuk memberikan bantuan medis cepat.",
  subtitle:
    "Di saat-saat darurat, setiap detik sangat berharga. Kami hadir untuk memastikan Anda mendapatkan bantuan medis yang Anda butuhkan dengan segera. Tim kami terdiri dari tenaga medis berpengalaman, didukung oleh armada ambulans yang dilengkapi dengan peralatan medis mutakhir. Kami siap melayani 24 jam, 7 hari seminggu, memberikan solusi transportasi medis darurat maupun non-darurat dengan standar pelayanan terbaik.",
  href: "#contact",
};
const bannerData2 = {
  image:
    "https://i.pinimg.com/564x/79/67/c2/7967c293693725753019d0e85fe3c9e5.jpg",
  tag: "Siap Siaga untuk Kesehatan dan Keselamatan Anda",
  title:
    "Penyedia layanan ambulans terpercaya dengan komitmen untuk memberikan bantuan medis cepat.",
  subtitle:
    "Di saat-saat darurat, setiap detik sangat berharga. Kami hadir untuk memastikan Anda mendapatkan bantuan medis yang Anda butuhkan dengan segera. Tim kami terdiri dari tenaga medis berpengalaman, didukung oleh armada ambulans yang dilengkapi dengan peralatan medis mutakhir. Kami siap melayani 24 jam, 7 hari seminggu, memberikan solusi transportasi medis darurat maupun non-darurat dengan standar pelayanan terbaik.",
  href: "#contact",
};

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <NavbarBanner />
      <Hero />
      <WhatsappButton />
      <NumberContainer />
      <Service />
      <Banner {...bannerData} />
      <Banner {...bannerData2} reverse={true} />
      <Contact />
    </main>
  );
};

export default App;
