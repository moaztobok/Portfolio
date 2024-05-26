import Button from "./Button";
const Hero = () => {
  return (
    <section className=" max-container flex flex-col items-center justify-center min-h-screen w-full text-primary relative z-10">
      <div className="flex items-center flex-col w-full ">
        <h1
          id="item-1"
          className="opacity-0 font-elsie font-black lg:text-8xl md:text-6xl text-6xl text-nowrap text-center "
        >
          Moaz Tobok
        </h1>
        <p
          id="item-2"
          className="opacity-0 leading-4 text-center place-content-evenly text-sm md:text-lg break-words md:w-3/4 lg:w-1/2"
        >
          Photographer, Designer, Web Developer. Crafting visual stories, pixel
          by pixel. Welcome to a world where creativity meets functionality
        </p>
        <div id="item-3" className="opacity-0 gap-4 flex justify-center my-4">
          <Button label="Contact Me" />
          <Button label="Download CV" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
