import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "@/components/Navigation";
import Background from "@/components/Background";

const Home = () => {

  return (
    <div className="w-full relative bg-gray-100/50"
    id="home">
      <Navigation />
      <Hero />
      {/* <Background /> */}
    </div>
  );
};

export default Home;
