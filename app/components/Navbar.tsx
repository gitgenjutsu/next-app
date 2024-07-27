"use client";
import Link from "next/link";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-white-600">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Software Developer</span>
              <div className="logo hover:bg-red-600 bg-red-800 p-1 px-5 rounded">
                <span className="logo-name">Wasim</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu} // Add onClick handler to toggle the menu
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              className="text-black hover:text-white font-semibold leading-6"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-black hover:text-white font-semibold leading-6"
              href="/about"
            >
              About
            </Link>
            {/* <Link
              className="text-black hover:text-white font-semibold leading-6"
              href="/projects"
            >
              Projects
            </Link> */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="mailto:wasimraja1996@gmail.com"
              className="text-sm font-semibold leading-6 text-gray-900 bg-white rounded p-1.5"
              legacyBehavior
            >
              <a
                rel="noopener noreferrer"
                className=" text-gray-900 bg-white rounded p-1.5"
              >
                Connect <span aria-hidden="true">&rarr;</span>
              </a>
            </Link>
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        {isMenuOpen && ( // Conditionally render the mobile menu
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={toggleMenu}
            ></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={toggleMenu}>
                  <span className="sr-only">Software Developer</span>
                  <div className="logo hover:bg-red-600 bg-red-800 p-1 px-5 rounded">
                    <span className="logo-name">Wasim</span>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={toggleMenu} // Add onClick handler to close the menu
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      href="/"
                      onClick={toggleMenu} // Close the menu on link click
                    >
                      Home
                    </Link>
                    <Link
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      href="/about"
                      onClick={toggleMenu} // Close the menu on link click
                    >
                      About
                    </Link>
                    <Link
                      href="mailto:wasimraja1996@gmail.com"
                      className="-mx-3 block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50"
                      legacyBehavior
                    >
                      <a
                        rel="noopener noreferrer"
                        className="text-base font-semibold leading-7 -mx-3 block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50"
                      >
                        Connect
                      </a>
                    </Link>
                  </div>
                  <div className="py-6">
                    <Link
                      href="https://www.linkedin.com/in/wasim-mohd/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50"
                      legacyBehavior
                    >
                      <a
                        rel="noopener noreferrer"
                        className="text-base font-semibold leading-7 -mx-3 block rounded-lg px-3 py-2 text-gray-900 hover:bg-gray-50"
                      >
                        LinkedIn
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
