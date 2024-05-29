import Capabilities from '../components/Capabilities';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <main
      className="  pattern-wavy pattern-blue-100 pattern-bg-white 
    pattern-size-32 pattern-opacity-100 relative overflow-x-hidden  bg-primary-foreground transition-all duration-200 dark:bg-black "
    >
      <Hero />
      <div className="ctm-bg absolute left-0 top-0 h-full w-full overflow-hidden opacity-10">
        {/* <div className="absolute bottom-0 left-0 right-0 top-2/3 z-0 my-auto aspect-square  w-full scale-[500%] rounded-full  bg-gradient-to-t from-[#afffe7] to-[#b0d2ff]  blur-[100px] transition-all duration-75 dark:from-[#00FFF0] dark:to-[#2D00AD]  md:scale-[200%] lg:top-[110%] lg:scale-110 lg:blur-[150px]"></div> */}
      </div>
      <Capabilities />
    </main>
  );
};

export default HomePage;
