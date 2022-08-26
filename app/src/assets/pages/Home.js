import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SectionOne from "../components/Sections/One/SectionOne";
import SectionTwo from "../components/Sections/Two/SectionTwo";
import SectionThree from "../components/Sections/Three/SectionThree";
import SectionSix from "../components/Sections/Six/SectionSix";
const Home = () => {
  return (
    <>
      <Hero />
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionSix />
      <div className="h-screen bg-red-500 w-full"></div>
      <Footer />
    </>
  );
};

export default Home;
