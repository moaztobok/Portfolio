import { CircleArrowRight } from "lucide-react";
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
  return (
    <div className="z-1 bg-primary/10 relative z-10 backdrop-blur-2xl py-10 overflow-hidden">
      <div className="w-[300px] md:w-[400px] aspect-square rounded-full bg-[#00FFF0] absolute -z-[1] blur-[100px] -bottom-14 md:-bottom-1/2 -left-52"></div>
      <div className="w-[250px] md:w-[400px] aspect-square rounded-full bg-[#00FFF0] absolute -z-[1] blur-[100px] -top-14 md:-top-1/2 -right-52"></div>
      {/* <div className="w-[400px] aspect-square rounded-full bg-[#00FFF0] absolute -z-[1] blur-[100px] lg:-bottom-40 lg:top-auto -top-36 -right-40"></div> */}
      <div className="w-full mx-auto grid grid-flow-row">
        <h1 className="align-middle font-abriFarface w-full inline-flex gap-2 text-4xl mb-10 text-primary max-container">
          Capabilities <CircleArrowRight size={42} />{" "}
        </h1>
        <div className="max-container flex flex-col  lg:flex-row lg:divide-x-2 divide-primary gap-10">
          {info.map((info, i) => (
            <div
              key={i}
              className="lg:ps-4 flex flex-col gap-3 mt-4 text-primary"
            >
              {info.icon}
              <p className="text-3xl font-semibold">{info.title}</p>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
