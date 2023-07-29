"use client";
import SuscribeForm from "./SuscribeForm";

export default function Banner() {
  return (
    //  <!-- banner - start -->
    // <div className="relative flex flex-wrap bg-[#262A33] px-4 py-8 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-[8rem] sm:pr-8 md:px-8 mb-8">
    //   <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:pt-3 sm:w-auto md:text-base">
    //     <span className="text-[#FFF1E5] font-bold font-text text-lg">
    //       Rester informer et ne manquer aucun article,
    //     </span>{" "}
    //     <br></br> abonnez-vous à notre newsletter.
    //   </div>
    //   <div className="mb-3 flex overflow-hidden max-w-screen-2xl md:mb-0 flex flex-col md:flex-row md:gap-x-4">
    //     <SuscribeForm />
    //   </div>
    // </div>
    // <!-- banner - end -->
    <div className="bg-[#262A33] py-6 sm:py-8 lg:py-8 mb-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden items-center p-4">
          {/* <!-- image - start --> */}
          <div className="relative hidden sm:block sm:w-1/3 lg:w-1/2">
            <div className="mb-0 sm:mb-8">
              <h2 className="text-center text-xl font-bold text-[#FCD0B1] sm:text-left sm:text-2xl lg:text-2xl">
                Rester informer et ne manquer aucun article
              </h2>
              <p className="text-center text-white sm:text-left">
                Abonnez-vous à notre newsletter
              </p>
            </div>
          </div>
          {/* <!-- image - end --> */}

          {/* <!-- content - start --> */}
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <SuscribeForm />
              {/* <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                <input
                  placeholder="Adresse e-mail"
                  className="bg-gray-white w-full flex-1  border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-[#990f3d]/30 transition duration-100 focus:ring"
                />

                <button className="inline-block  bg-[#990f3d] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-white hover:text-gray-900 focus-visible:ring active:bg-[#990f3d]/70 md:text-base">
                  S'inscrire
                </button>
              </form> */}

              <p className="text-center text-xs text-gray-400 sm:text-left">
                By signing up to our newsletter you agree to our{" "}
                <a
                  href="#"
                  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Term of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </a>
                .
              </p>
              {/* <div className="relative items-center w-full mx-auto max-w-7xl mt-2">
                <div className="p-2 border-l-4 border-[#990f3d]  rounded-r-xl bg-white">
                  <div className="flex">
                    <div className="flex-shrink-2">
                      <svg
                        className="w-5 h-5 text-[#990f3d]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm text-black">
                        <p>
                          Félicitation! Vous êtes maintenant inscrit à notre
                          newsletter.
                        </p>
                      </div>
                    </div>


                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  );
}
