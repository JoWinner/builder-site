import { useState } from "react";
import { HiColorSwatch, HiX, HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className=" bg-black/50 py-2 font-secondary font-medium text-gray-200 text-lg">
      <nav className="flex justify-between items-center w-[92%] mx-auto  ">
        <div>
          <RouterLink to="/">
            <HiColorSwatch className="text-3xl cursor-pointer" />
          </RouterLink>
        </div>
        <div
          className={`nav-links duration-500  md:static absolute px-5 md:min-h-fit min-h-[50vh] left-0 ${
            isMenuOpen
              ? "top-[9%] bg-black/50 md:bg-transparent "
              : "top-[-100%] "
          } md:w-auto w-full flex items-center `}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
            <li>
              <ScrollLink
                activeClass="active"
                to="company"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className="hover:text-orange-500 transition-colors duration-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Company
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="hover:text-orange-500 transition-colors duration-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                className="hover:text-orange-500 transition-colors duration-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Services
              </ScrollLink>
            </li>
            {/* <li>
              <RouterLink
                to="/project"
                className="hover:text-orange-500 transition-colors duration-500 cursor-pointer"
                onClick={toggleMenu}
              >
                Gallery
              </RouterLink>
            </li> */}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className="bg-orange-500  text-white px-5 py-2  hover:bg-orange-600 transi cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
          {isMenuOpen ? (
            <HiX
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
