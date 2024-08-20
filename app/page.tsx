import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "@/components/Navigation";

const Home = () => {

  return (
    <div className="overflow-y-hidden">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
