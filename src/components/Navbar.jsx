import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo1 from "../logo.jpg";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src={logo1} alt="Workflow" />
            </div>
            <div className="hidden md:block">
              <div className="">
                {/* <Link to="/"
                  className=" hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>

                <Link to="/books"
                  className="text-gray-300 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Books
                </Link> */}
              </div>
            </div>
            <div className="shop-icon flex-row-reverse flex-end ml-auto">
              <a href="" color="white" className="">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-orange-400 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition show={isOpen}>
          {(ref) => (
            <div className="md:hidden flex-row-reverse" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex-row-reverse">
                <a
                  href="#"
                  className="hover:bg-orange-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-orange-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Books
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>
  );
};

export default Navbar;
