import React from "react";

export default function Banner() {
  return (
    //  <!-- banner - start -->
    <div className="relative flex flex-wrap bg-[#262A33] px-4 py-8 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-[8rem] sm:pr-8 md:px-8 mb-8">
      <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">
        <span className="text-[#FFF1E5] font-bold font-text">
          This is a section of some simple filler text.
        </span>{" "}
        <br></br> also known as placeholder text.
      </div>

      <a
        href="#"
        className="order-last inline-block w-full whitespace-nowrap bg-[#990f3d] px-4 py-3 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-white hover:text-gray-900 focus-visible:ring  sm:order-none sm:w-auto md:text-sm"
      >
        Suscribe Now
      </a>
    </div>
    // <!-- banner - end -->
  );
}
