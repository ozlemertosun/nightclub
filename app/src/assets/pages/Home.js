import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SectionOne from "../components/Sections/One/SectionOne";
const Home = () => {
  return (
    <>
      <Hero />
      <Navigation />
      <SectionOne />
      <div className="h-screen bg-green-500 w-full"></div>
      <div className="h-screen bg-blue-500 w-full"></div>
      <div className="h-screen bg-red-500 w-full"></div>
      <Footer />
    </>
  );
};

export default Home;
