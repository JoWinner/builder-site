import {  useEffect } from "react";

import { HiArrowNarrowLeft, HiArrowNarrowRight, HiX } from "react-icons/hi";

const Modal = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  closeModal,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      closeModal();
    }
  };

  useEffect(() => {
    // Prevent scrolling on the body when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="min-h-screen fixed top-0 right-0 left-0 w-full h-full flex items-center justify-center bg-black/80 backdrop-blur-md "
      onClick={handleClick}
    >
      <img
        src={clickedImg}
        alt={clickedImg}
        className="block min-w-screen h-full my-auto object-over"
      />
      <span
        className="dismiss absolute top-5 right-5 text-3xl cursor-pointer z-999"
        onClick={closeModal}
      >
        <HiX className="text-3xl text-orange-500" />
      </span>
      <div
        onClick={handelRotationLeft}
        className="flex bg-gray-900 justify-center items-center absolute top-[50%] left-0 w-[50px] h-[50px]  group hover:bg-orange-500 duration-500 cursor-pointer"
      >
        <HiArrowNarrowLeft className="text-3xl text-white " />
      </div>
      <div
        onClick={handelRotationRight}
        className="flex bg-gray-900  justify-center items-center absolute top-[50%] right-0 w-[50px] h-[50px]  group hover:bg-orange-500 duration-500 cursor-pointer"
      >
        <HiArrowNarrowRight className="text-3xl text-white " />
      </div>
    </div>
  );
};

export default Modal;
