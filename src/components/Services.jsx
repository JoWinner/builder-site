import { Home, Briefcase, Reward, Gate } from "../assets";
import { Home6 } from "../assets";
import { Reveal } from "../utils";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <div className="py-8 md:mx-20 mx-10">
      <Element name="services" id="services">
        <Reveal
          childTransition={{ duration: 1, delay: 0.7 }}
          childStyle={{ background: "var(--brand)" }}
        >
          <h2 className="font-bold text-3xl md:text-4xl text-gray-800 font-secondary mb-16  uppercase">
            This is what we do
          </h2>
        </Reveal>
        <div className="container grid  grid-cols-12 mx-auto  gap-y-28 ">
          <div className="col-span-12 lg:col-span-6 font-body">
            <div className="grid grid-cols-2 md:gap-y-5 gap-y-20 gap-x-5 ">
              <div className="h-60">
                <img src={Home} className="h-1/4" />
                <div>
                  <h2 className="font-secondary text-xl md:text-2xl font-bold text-gray-800 py-3 ">
                    Unique Detailing
                  </h2>
                  <Reveal childTransition={{ duration: 1, delay: 0.9 }}>
                    <p className=" md:text-lg text-sm font-medium text-gray-500">
                      Fastidious Level of Detail. <br /> Your build is our
                      build.
                      <br /> Luxury Finishes.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="h-60">
                <img src={Gate} className="h-1/4" />
                <div>
                  <h2 className="font-secondary text-xl md:text-2xl font-bold text-gray-800 py-3">
                    Open Communication
                  </h2>
                  <Reveal childTransition={{ duration: 1, delay: 0.9 }}>
                    <p className=" md:text-lg text-sm font-medium text-gray-500">
                      Availability & Reliability. <br />
                      Continual Updates. <br />
                      Transparency.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="h-60">
                <img src={Briefcase} className="h-1/4" />
                <div>
                  <h2 className="font-secondary text-xl md:text-2xl font-bold text-gray-800 py-3">
                    Professional Trades.
                  </h2>
                  <Reveal childTransition={{ duration: 1, delay: 0.9 }}>
                    <p className="md:text-lg text-sm font-medium text-gray-500">
                      Jack for the Trade. <br /> Respectful. <br />
                      Punctual.
                    </p>
                  </Reveal>
                </div>
              </div>
              <div className="h-60">
                <img src={Reward} className="h-1/4" />
                <div>
                  <h2 className="font-secondary text-xl md:text-2xl font-bold text-gray-800 py-3">
                    Exceeding Expectations
                  </h2>
                  <Reveal childTransition={{ duration: 1, delay: 0.9 }}>
                    <p className="md:text-lg text-sm font-medium text-gray-500">
                      Striving for Perfection <br /> Following Through
                      <br />
                      Guarantee
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-6">
            <Reveal
              childTransition={{ duration: 1, delay: 1.5 }}
              childStyle={{ background: "var(--brand)" }}
            >
              <img
                src={Home6}
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg) ",
                }}
                alt=""
              />
            </Reveal>
          </div>
        </div>
        <div className="container md:text-lg  text-sm font-medium font-body text-gray-700 my-14 text-justify">
          <Reveal childTransition={{ duration: 1, delay: 0.7 }}>
            <p>
              We work with trades who are the best in their field. If you want a
              concrete slab prepared ready for concrete polishing or a
              minimalist epoxy white floor poured, we ensure that no request is
              too hard or met with the excuse “that’s not what we usually do”.
              <br />
              <br />
              We also share a passion for renovations as much as our clients!
              Whether you’re considering adding a level onto your current home,
              extending, or updating a major area within your home, we work with
              you to ensure your renovation is everything you wanted and more.
              We share in your delight at seeing the transformation, from before
              to after, and work tirelessly in ensuring your renovation is
              delivered to the highest standard.
              <br />
              <br />
              We strongly believe that if you can dream it,
              <span className="text-gray-900 font-bold text-lg md:text-2xl">
                we can build it!
              </span>
            </p>
          </Reveal>
        </div>
      </Element>
    </div>
  );
};

export default Services;

