import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "@/components/Navigation";

const Home = () => {

  return (
    <div className="w-full relative bg-gray-100/50"
    id="home">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
