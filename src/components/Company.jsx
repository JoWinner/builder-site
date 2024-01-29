import { Home2, Home3, Home4, Wood } from "../assets";
import { Element } from "react-scroll";
import { Reveal } from "../utils";

const Company = () => {
  return (
    <div className="mx-10 lg:mx-20 min-h-screen my-60 font-body md:text-lg  text-sm text-gray-200 font-normal ">
      <Element name="company" id="company">
        <div
          style={{
            backgroundImage: `url(${Home3})`,
          }}
          className="h-52 flex justify-center items-center  bg-fixed bg-no-repeat bg-cover aspect-square bg-center mb-20 border-y-8 border-orange-500"
        >
          <Reveal
            childTransition={{ duration: 1, delay: 0.7 }}
            childStyle={{ background: "none" }}
          >
            <h1 className="font-black text-4xl md:text-6xl font-primary text-gray-200">
              Dream Flat
            </h1>
          </Reveal>
        </div>

        <div className="py-10 ">
          <Reveal
            childTransition={{ duration: 1, delay: 0.7 }}
            childStyle={{ background: "var(--brand)" }}
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-800 font-secondary">
              YOUR LEADERSHIP ARCHITECT
            </h2>
          </Reveal>
          <Reveal childTransition={{ duration: 1, delay: 0.7 }}>
            <p className="text-justify text-gray-700 pt-4">
              Exceptional building architecture delivers the envisioned result
              that clients desire for their dream homes. To attain excellence in
              every project, it is crucial for all stakeholders, including
              owners, architects, interior designers, field team, office staff,
              trade contractors, and suppliers, to collaborate harmoniously.
              Dona-Dona serves owners and takes care of all the other parties to
              achieve this. This collaboration aims to achieve project goals
              related to budget, schedule, and quality. Acting as a Leadership
              Architect, Dona-Dona has a demonstrated history of ensuring
              accountability among all parties involved, fostering transparent
              and direct communication within a foundation of trust.
            </p>
          </Reveal>
        </div>

        <div
          style={{ backgroundImage: `url(${Home2})` }}
          className="md:h-[400px] h-[540px] lg:h-[540px] bg-fixed bg-no-repeat bg-cover aspect-square xl:ml-48  lg:ml-40 rounded-l-full  mt-24"
        >
          <div
            style={{
              backgroundImage: `url(${Wood})`,
            }}
            className=" xl:ml-9 h-[280px] md:h-auto lg:h-[250px] xl:h-auto bg-fixed bg-no-repeat bg-cover aspect-square "
          >
            <div className=" py-2  px-2  md:px-4 lg:py-2 h-full bg-black/20">
              <Reveal
                childTransition={{ duration: 1, delay: 0.7 }}
                childStyle={{ background: "var(--brand)" }}
              >
                <h2 className="font-medium md:font-bold text-xl md:text-3xl lg:text-4xl text-white font-secondary ">
                  Dedication, experience and a passion for perfection.
                </h2>
              </Reveal>

              <Reveal childTransition={{ duration: 1, delay: 0.7 }}>
                <p className="md:after:leading-6 pt-4 lg:pt-2 xl:w-full text-justify ">
                  Dona-Dona Constructions prioritizes the needs and goals of
                  their clients. They emphasize building strong and long-lasting
                  relationships, contributing to their growth and success. Their
                  commitment to surpassing client expectations has led to repeat
                  business within the local community, benefiting both their
                  company and the community at large.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${Home4})` }}
          className="md:h-[400px] h-[540px] lg:h-[540px] bg-fixed bg-no-repeat bg-cover aspect-square xl:mr-48  lg:mr-40 rounded-r-full  mt-24"
        >
          <div
            style={{
              backgroundImage: `url(${Wood})`,
            }}
            className=" xl:mr-9 h-[280px] md:h-auto lg:h-[250px] xl:h-auto bg-fixed bg-no-repeat bg-cover aspect-square "
          >
            <div className=" py-2  px-2  md:px-4 lg:py-2 h-full bg-black/20">
              <Reveal
                childTransition={{ duration: 1, delay: 0.7 }}
                childStyle={{ background: "var(--brand)" }}
              >
                <h2 className="font-medium md:font-bold text-xl md:text-3xl  lg:text-4xl text-white font-secondary ">
                  Dedication, experience and a passion for perfection.
                </h2>
              </Reveal>
              <Reveal childTransition={{ duration: 1, delay: 0.7 }}>
                <p className="md:leading-6  pt-4 lg:pt-2 xl:w-full text-justify ">
                  Dona-Dona Constructions prioritizes the needs and goals of
                  their clients. They emphasize building strong and long-lasting
                  relationships, contributing to their growth and success. Their
                  commitment to surpassing client expectations has led to repeat
                  business within the local community, benefiting both their
                  company and the community at large.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Company;
