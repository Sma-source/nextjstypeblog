"use client";

import { useState } from "react";

export default function Button() {
  const [copied, setCopied] = useState(false);
  const CopiedClick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <button
      onClick={CopiedClick}
      title="Copier le lien"
      className="flex w-auto py-2 px-3 text-sm leading-snug h-auto min-w-[123px] text-center cursor-pointer place-content-center text-[#990f3d] bg-white rounded-xl"
    >
      {!copied ? (
        <>
          <span className="flex h-4 w-4 ml-0 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-[#990f3d]"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13.4 10.6a5.1 5.1 0 0 1 1.6 3.6c0 1.4-.6 2.7-1.6 3.7l-2.6 2.6A5.1 5.1 0 0 1 7.2 22a5.1 5.1 0 0 1-3.7-1.5A5.1 5.1 0 0 1 2 16.8c0-1.4.5-2.7 1.5-3.6l2.6-2.6.2-.2v.4l.3 1.8-1.9 1.8a3.4 3.4 0 0 0-1 2.4c0 1 .4 1.8 1 2.5a3.5 3.5 0 0 0 5 0l2.5-2.6a3.4 3.4 0 0 0 1-2.5c0-.9-.3-1.8-1-2.4a3.5 3.5 0 0 0-.6-.5 1.7 1.7 0 0 1-.1-.5c0-.5.2-1 .5-1.2a5.2 5.2 0 0 1 1.4 1zm6-6A5.1 5.1 0 0 1 21 8.1a5.2 5.2 0 0 1-1.5 3.6l-2.6 2.6-.2.2v-.4a7 7 0 0 0-.3-1.8l1.9-1.8a3.4 3.4 0 0 0 1-2.4c0-1-.4-1.8-1-2.5a3.4 3.4 0 0 0-2.5-1c-.9 0-1.8.4-2.4 1l-2.6 2.6a3.4 3.4 0 0 0-1 2.5 3.4 3.4 0 0 0 1.6 2.9 1.7 1.7 0 0 1-.4 1.7 5.2 5.2 0 0 1-1.4-1A5.1 5.1 0 0 1 8 10.8C8 9.4 8.6 8 9.6 7l2.6-2.6A5.1 5.1 0 0 1 15.8 3c1.4 0 2.7.5 3.7 1.5z"></path>
            </svg>
          </span>
          <span className="block">Copier le lien </span>
        </>
      ) : (
        <>
          <span className="flex h-4 w-4 ml-0 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 fill-[#0f9130]"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span className="block text-[#0f9130]">Lien copié</span>
        </>
      )}
    </button>
  );
}
