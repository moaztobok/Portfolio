import Capabilities from "./components/Capabilities";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <main className="bg-primary-foreground overflow-x-hidden relative transition-all duration-200 ">
      <Hero />
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
        <div className="absolute z-0 lg:blur-[150px] blur-[100px] rounded-full left-0 right-0  top-1/2 bottom-0  my-auto w-full h-full aspect-square bg-gradient-to-t from-[#00FFF0] to-[#2D00AD] transition-all duration-75"></div>
      </div>
      <Capabilities />
    </main>
  );
};

export default HomePage;
