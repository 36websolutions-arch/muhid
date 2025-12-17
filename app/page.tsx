import About from "@/components/About";
import Navbar from "@/components/common/Navbar";
import Topbar from "@/components/common/Topbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
    </main>
  );
}
