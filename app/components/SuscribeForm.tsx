"use client";

import { FormEvent, useRef, useState } from "react";

export default function SuscribeForm() {
  const [input, setInput] = useState("");
  const [successMessage, setSuccessMessage] =
    useState<MembersSuccessResponse>();
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const suscribeUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = input;
    if (!email) return;
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();

    if (data.error) {
      setErrorMessage("Your already subscribe!");
      setSuccessMessage(undefined);
      setInput("");
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }

    setSuccessMessage(data.res);
    setErrorMessage("");
    setInput("");

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <>
      <form
        onSubmit={suscribeUser}
        className="mb-3 flex w-full max-w-md gap-2 sm:mb-5"
      >
        <input
          name="email"
          type="email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Adresse e-mail"
          required
          className="bg-gray-white w-full flex-1  border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-[#990f3d]/30 transition duration-100 focus:ring"
        />

        <button
          type="submit"
          className="inline-block  bg-[#990f3d] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-white hover:text-gray-900 focus-visible:ring active:bg-[#990f3d]/70 md:text-base"
        >
          S'inscrire
        </button>
      </form>

      {showAlert && (successMessage || errorMessage) && (
        <div className="relative items-center w-full mx-auto max-w-7xl mt-2">
          <div className="p-2 border-l-4 border-[#990f3d]  rounded-r-xl bg-white">
            <div className="flex">
              {successMessage ? (
                <>
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
                        Félicitations!{" "}
                        <span className="text-[#ADB0B1]">
                          {successMessage.email_address}
                        </span>{" "}
                        maintenant inscrit à notre lettre d'information.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-shrink-2">
                    <svg
                      className="w-5 h-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm text-black">
                      <p>
                        Oops il semble que vous soyez déjà abonnez à notre
                        lettre d'information.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
