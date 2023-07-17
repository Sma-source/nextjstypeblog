import React from "react";

export const metadata = {
  title: "A Propos",
};
export default function About() {
  return (
    <>
      <div className="container w-full py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-3/12 lg:order-first">
            <div className="p-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
              <div className="flex py-2 mb-4">
                <img
                  src="/assets/images/avatar.png"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">Zugzwang</p>
                  <p className="text-sm text-gray-500">Projet</p>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="flex items-center px-6 py-2 mt-auto text-lg text-white transition duration-500 ease-in-out transform bg-[#990f3d] border border-current rounded hover:bg-[#990f3d]/80 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                >
                  Suivez nous sur Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mt-12 prose lg:px-0 lg:max-w-4xl">
            <div className="mb-5 border-b border-gray-200">
              <div className="flex flex-wrap items-baseline -mt-2">
                <h5>12-03-2021</h5>
                <p className="mt-1 ml-2">Transitions</p>
              </div>
            </div>
            <h1>
              Page transitions are a fundamental part of website navigation and
              user experience.
            </h1>
            <p>
              Through the lens of a set of certitudes based on deductions
              founded on false premise.
            </p>
            <p>
              Turd polishing put a record on and see who dances, dog and pony
              show, nor one-sheet. Ensure to follow requirements when developing
              solutions three-martini lunch, that jerk from finance really threw
              me under the bus. Bob called an all-hands this afternoon.
            </p>
            <p>
              We've got kpis for that this is a no-brainer viral engagement
              pixel pushing. Run it up the flagpole please use "solutionise"
              instead of solution ideas! :) dunder mifflin form without content
              style without meaning target rich environment. Three-martini
              lunch. Get buy-in prioritize these line items, or deliverables yet
              back to the drawing-board let's put a pin in that, close the loop.
              Manage expectations product market fit win-win-win. The horse is
              out of the barn poop, but can you put it on my calendar? but drink
              from the firehose, but quick-win.
            </p>
            <h1>"Focus on the customer journey"</h1>
            <p>
              If you could do that, that would be great this is a no-brainer, or
              Q1 regroup. Groom the backlog what do you feel you would bring to
              the table if you were hired for this position. Back of the net.
              Scope creep can you slack it to me? shotgun approach build on a
              culture of contribution and inclusion please advise soonest.
            </p>
            <h3>Is a no-brainer, or Q1 regroup.</h3>
            <p>
              Gain traction make it more corporate please we need to harvest
              synergy effects not enough bandwidth, and we want to empower the
              team with the right tools and guidance to uplevel our craft and
              build better nor low-hanging fruit the right info at the right
              time to the right people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
