"use client";
import { animateInElements } from "@/utils/animations";
import { CircleArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import AmazightIcon1 from "./AmazightIcon1";
const info = [
  {
    title: "Design guidance",
    description:
      "Designing for you considering your needs, preferences and behaviors",
    icon: <AmazightIcon1 />,
  },
  {
    title: "Web development",
    description:
      "Web development creates and maintains websites, involving tasks from interface design to functionality implementation",
    icon: <AmazightIcon1 />,
  },
  {
    title: "Art direction",
    description:
      "guiding the visual elements of a project, ensuring a cohesive and impactful aesthetic across various creative mediums.",
    icon: <AmazightIcon1 />,
  },
];
const Capabilities = () => {
  const trigger = useRef(null);
  const el0Ref = useRef(null);
  const el1Ref = useRef(null);
  const el2Ref = useRef(null);
  useEffect(() => {
    if (!trigger.current) return;
    if (!el0Ref.current || !el1Ref.current || !el2Ref.current)
      return console.log("Element not found");
    const animation = animateInElements(
      [el0Ref.current, el1Ref.current, el2Ref.current],
      trigger
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="bg-primary/10 relative z-10 backdrop-blur-2xl  overflow-hidden py-32"
      ref={trigger}
    >
      <div className="w-full mx-auto grid grid-flow-row">
        <h1 className="font-poppins font-black w-full inline-flex gap-2 text-4xl mb-5 text-primary max-container">
          What i Do! <CircleArrowRight size={42} strokeWidth={2} />
        </h1>
        <div className="max-container flex flex-col  lg:flex-row lg:divide-x-2 divide-primary gap-10">
          <div
            ref={el0Ref}
            className="lg:ps-6 flex flex-col gap-3 mt-4 text-primary  w-3/4"
          >
            <p className="text-3xl font-semibold">{info[0].title}</p>
            <p className="lg:w-5/6">{info[0].description}</p>
          </div>
          <div
            ref={el1Ref}
            className="lg:ps-6 flex flex-col gap-3 mt-4 text-primary  w-3/4"
          >
            <p className="text-3xl font-semibold">{info[1].title}</p>
            <p className="lg:w-5/6">{info[1].description}</p>
          </div>
          <div
            ref={el2Ref}
            className="lg:ps-6 flex flex-col gap-3 mt-4 text-primary  w-3/4"
          >
            <p className="text-3xl font-semibold">{info[2].title}</p>
            <p className="lg:w-5/6">{info[2].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
