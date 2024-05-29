import Button from './Button';
const Hero = () => {
  return (
    <section className=" max-container relative z-10 flex min-h-screen w-full flex-col items-center justify-center text-primary">
      <div className="flex w-full flex-col items-center ">
        <h1
          id="item-1"
          className="text-nowrap text-center font-elsie text-6xl font-black opacity-0 md:text-6xl lg:text-8xl "
        >
          Moaz Tobok
        </h1>
        <p
          id="item-2"
          className="place-content-evenly break-words text-center text-sm leading-4 opacity-0 md:w-3/4 md:text-lg lg:w-1/2"
        >
          Photographer, Designer, Web Developer. Crafting visual stories, pixel
          by pixel. Welcome to a world where creativity meets functionality
        </p>
        <div id="item-3" className="my-4 flex justify-center gap-4 opacity-0">
          <Button label="Contact Me" />
          <Button label="Download CV" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
