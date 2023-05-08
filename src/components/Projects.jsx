import classNames from "classnames";
import { Works } from "../utils";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Element } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Projects() {
  const [activeItem, setActiveItem] = useState(4);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div
      id="projects"
      className="flex h-full w-full items-center justify-center my-32"
    >
      {" "}
      <Element name="projects"></Element>
      <div className="w-[1200px] max-w-full">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 h-[600px] md:h-[640px]  md:flex-row  md:gap-[1.5%]"
        >
          {Works.map((work, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative cursor-pointer h-[10%] md:h-[100%] md:w-[6%] first:h-[5%] last:h-[5%] md:first:h-[100%] md:last:h-[100%] md:first:w-[5%] md:last:w-[5%] md:[&[aria-current='true']]:w-[48%] md:[&[aria-current='true']]:h-[100%] [&[aria-current='true']]:h-[100%] ",
                "md:[transition:width_var(--transition,200ms_ease-in)] [transition:height_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                "md:hover:w-[12%]"
              )}
              key={work.name}
            >
              <div className="relative h-full w-full overflow-hidden  bg-orange-500">
                <img
                  className="absolute right-0  md:top-1/2   max-w-none md:-translate-y-1/2  object-cover h-[300px] w-full md:left-1/2  md:h-[620px]  md:w-[590px]  md:-translate-x-1/2"
                  src={work.img}
                  alt={work.name}
                  width="590px"
                  height="640px"
                />
                <div
                  className={classNames(
                    "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture  absolute  transition-opacity",
                    activeItem === index ? " opacity-25" : " opacity-0"
                  )}
                />
                <div
                  className={classNames(
                    "left-8 top-8 w-[590px] p-4 transition-[transform,opacity]  absolute  md:p-0",
                    activeItem === index
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  )}
                >
                  <p className="text-xl font-bold  md:text-4xl text-gray-200">
                    {work.name}
                  </p>
                  <Link
                    to={`/projects/${work.id}/${encodeURIComponent(work.name)}`}
                  >
                    <button className="  text-orange-500">
                      <HiArrowNarrowRight className="text-4xl hover:translate-x-5 duration-500 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
