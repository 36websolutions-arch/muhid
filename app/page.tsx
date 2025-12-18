import About from "@/components/About";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Discount from "@/components/Discount";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Discount />
      <Footer />
    </main>
  );
}
