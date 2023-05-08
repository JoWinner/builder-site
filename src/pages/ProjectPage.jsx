import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { Reveal, Works } from "../utils";
import { Modal } from "../components";

import { HiColorSwatch, HiChevronDoubleLeft } from "react-icons/hi";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

 

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedProject = Works.find((work) => work.id === parseInt(id));
    setProject(selectedProject);
  }, [id]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item);
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      setClickedImg(null);
      setCurrentIndex(null);
    };

    const handelRotationRight = () => {
      const totalLength = project.images.length;
      const nextIndex = (currentIndex + 1) % totalLength;
      setCurrentIndex(nextIndex);
      setClickedImg(project.images[nextIndex]);
    };

    const handelRotationLeft = () => {
      const totalLength = project.images.length;
      const prevIndex = (currentIndex - 1 + totalLength) % totalLength;
      setCurrentIndex(prevIndex);
      setClickedImg(project.images[prevIndex]);
    };


  if (!project) {
    // Render a loading state or handle the case when project is null
    return <div>Loading...</div>;
  }

  return (
    <div className="md:mx-14 text-gray-700">
      <div className="my-16 text-lg  font-secondary font-medium">
        <div className="mx-10 flex flex-row justify-between items-center  text-orange-500   ">
          <RouterLink to="/">
            <HiColorSwatch className="cursor-pointer h-10 w-10" />
          </RouterLink>
          <button
            className="bg-orange-500 py-1 px-6 text-3xl group  "
            onClick={goBack}
          >
            <HiChevronDoubleLeft className="text-white transform group-hover:-translate-x-5 duration-500 transition-transform" />
          </button>
        </div>
        <div>
          <div className="flex flex-col  md:flex-row mt-14 items-center gap-10 min-h-screen ">
            <div className="md:w-1/2">
              <Reveal
                childTransition={{ duration: 1, delay: 0.5 }}
                childStyle={{ background: "var(--brand)" }}
              >
                <img
                  src={project.img}
                  className="w-[600px] h-[600px] object-cover "
                />
              </Reveal>
            </div>

            <div className=" flex-1">
              <Reveal
                childTransition={{ duration: 1, delay: 1.5 }}
                childStyle={{ background: "var(--brand)" }}
              >
                <h2 className="font-bold text-3xl  text-gray-800 font-secondary">
                  {project.name}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="md:mx-36 mx-5 flex flex-col  justify-between mt-32 gap-16">
            <div className="h-20 grid grid-cols-2 ">
              <div className="flex flex-col  gap-2">
                <h1 className="text-2xl font-bold text-gray-800"> Service</h1>
                <h2> {project.service}</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-gray-800"> Completed</h1>
                <h2> {project.date}</h2>
              </div>
            </div>

            <div className=" ">
              <p className="text-justify">{project.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-12 mt-14 min-h-screen mx-auto items-center ">
            <div className="col-span-12 md:col-span-6 bg-orange-500  w-full pr-8 items-center justify-center py-16">
              <Reveal
                childTransition={{ duration: 1, delay: 0.5 }}
                childStyle={{ background: "var(--brand)" }}
              >
                <img src={project.cover1} className=" w-[600px] h-[492px]" />
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Reveal childTransition={{ duration: 1, delay: 1.7 }}>
                <img src={project.cover2} className="h-[620px] w-[600px]" />
              </Reveal>
            </div>
          </div>

          {/* Map through the images array */}
          <div className="container flex flex-col justify-center p-4 mx-auto min-h-screen my-32">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 ">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="object-cover h-[300px] w-full cursor-zoom-in"
                  onClick={() => handleClick(image, index)}
                />
              ))}
            </div>

            <div className="mx-10 flex flex-row justify-between items-center mt-10 text-orange-500  ">
              <button
                className="bg-orange-500 py-1 px-6 text-3xl group  "
                onClick={goBack}
              >
                <HiChevronDoubleLeft className="text-white transform group-hover:-translate-x-5 duration-500 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectPage;
