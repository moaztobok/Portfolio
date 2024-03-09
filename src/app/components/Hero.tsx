import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <section className=" max-container flex flex-col items-center justify-center min-h-screen w-full text-primary relative z-10">
      <div className="flex items-center flex-col w-full">
        <h1 className="font-elsie font-medium lg:text-8xl md:text-6xl text-6xl text-nowrap text-center my-4">
          Moaz Tobok
        </h1>
        <p className="text-center place-content-evenly text-sm md:text-lg break-words lg:w-1/2">
          Photographer, Designer, Web Developer. Crafting visual stories, pixel
          by pixel. Welcome to a world where creativity meets functionality
        </p>
        <div className="gap-4 flex justify-center my-4">
          <Button label="Contact Me" onClick={() => {}} />
          <Button label="Download CV" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
