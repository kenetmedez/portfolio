import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "@/components/Navigation";
import Background from "@/components/Background";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <div className="w-full relative bg-gray-100/50 h-fit md:pt-[5rem] pt-0" id="home">
      <Navigation />
      <main>
        <Hero />
        <Background />
        <Projects />
      </main>
    </div>
  );
};

export default Home;
