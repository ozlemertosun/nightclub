import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SectionOne from "../components/Sections/One/SectionOne";
import SectionTwo from "../components/Sections/Two/SectionTwo";
const Home = () => {
  return (
    <>
      <Hero />
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <div className="h-screen bg-blue-500 w-full"></div>
      <div className="h-screen bg-red-500 w-full"></div>
      <Footer />
    </>
  );
};

export default Home;
