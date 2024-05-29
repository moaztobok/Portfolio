'use client';
import { animateInElements } from '@/utils/animations';
import { CircleArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import AmazightIcon1 from './AmazightIcon1';
import AmazightIcon2 from './AmazightIcon2';

const Capabilities = () => {
  const trigger = useRef(null);
  const el0Ref = useRef(null);
  const el1Ref = useRef(null);
  const el2Ref = useRef(null);
  useEffect(() => {
    if (!trigger.current) return;
    if (!el0Ref.current || !el1Ref.current || !el2Ref.current)
      return console.log('Element not found');
    const animation = animateInElements(
      [el0Ref.current, el1Ref.current, el2Ref.current],
      trigger,
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="relative z-10 overflow-hidden bg-primary/10  py-32 backdrop-blur-2xl"
      ref={trigger}
    >
      <div className="mx-auto grid w-full grid-flow-row">
        <h1 className="max-container mb-5 inline-flex w-full gap-2 font-poppins text-4xl font-black text-primary">
          What i Do! <CircleArrowRight size={42} strokeWidth={2} />
        </h1>
        <div className="max-container flex flex-col  gap-10 divide-primary lg:flex-row lg:divide-x-2">
          <div
            ref={el0Ref}
            className="mt-4 flex w-3/4 flex-col gap-3 text-primary  lg:ps-6"
          >
            <AmazightIcon1 />
            <p className="text-3xl font-semibold">Design guidance</p>
            <p className="lg:w-5/6">
              Designing for you considering your needs, preferences and
              behaviors
            </p>
          </div>
          <div
            ref={el1Ref}
            className="mt-4 flex w-3/4 flex-col gap-3 text-primary  lg:ps-6"
          >
            <AmazightIcon2 />
            <p className="text-3xl font-semibold">Web development</p>
            <p className="lg:w-5/6">
              Web development creates and maintains websites, involving tasks
              from interface design to functionality implementation
            </p>
          </div>
          <div
            ref={el2Ref}
            className="mt-4 flex w-3/4 flex-col gap-3 text-primary  lg:ps-6"
          >
            <AmazightIcon1 />
            <p className="text-3xl font-semibold">Art direction</p>
            <p className="lg:w-5/6">
              guiding the visual elements of a project, ensuring a cohesive and
              impactful aesthetic across various creative mediums
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
