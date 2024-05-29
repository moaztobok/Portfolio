import Capabilities from '../components/Capabilities';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <main className="relative overflow-x-hidden  bg-primary-foreground transition-all duration-200 dark:bg-black ">
      <Hero />
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-1/2 z-0 my-auto aspect-square  w-full scale-[250%] rounded-full  bg-gradient-to-t from-[#afffe7] to-[#b0d2ff]  blur-[100px] transition-all duration-75 dark:from-[#00FFF0] dark:to-[#2D00AD] md:top-1/2 md:scale-[200%] lg:top-[110%] lg:scale-110 lg:blur-[150px]"></div>
      </div>
      <Capabilities />
    </main>
  );
};

export default HomePage;
