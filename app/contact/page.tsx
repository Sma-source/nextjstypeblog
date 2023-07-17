import React from "react";

const Contact = () => {
  return (
    <div className="container w-full py-6 lg:py-10">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Contactez-nous
            </h1>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            <div className="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Contribution
              </h3>
              <a
                href="mailto:contribution@example.com"
                className="mt-3 font-bold text-[#990f3d] transition duration-100 hover:text-[#990f3d]/80"
              >
                contribution@example.com
              </a>
            </div>

            <div className="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">Press</h3>
              <a
                href="mailto:contribution@example.com"
                className="mt-3 font-bold text-[#990f3d] transition duration-100 hover:text-[#990f3d]/80"
              >
                press@example.com
              </a>
            </div>

            <div className="flex flex-col rounded-lg border p-4 md:p-6">
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                Question
              </h3>

              <a
                href="mailto:contribution@example.com"
                className="mt-3 font-bold text-[#990f3d] transition duration-100 hover:text-[#990f3d]/80"
              >
                contact@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
