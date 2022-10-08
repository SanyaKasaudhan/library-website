import React from "react";
import { FaHotjar, FaEllo, FaBookOpen } from "react-icons/fa";
import delivery from "../delivery.webp";
const Header = () => {
  return (
    <div>
      <h1 className="uppercase text-orange-400 text-5xl text-center m-5">
        create your future with us!
      </h1>
      <h3 className="uppercase text-orange-300 text-3xl text-center ">
        Find your dream book here
      </h3>

      <figure className="flex justify-center">
        <img src={delivery} alt="" className="min-w-fit" />
      </figure>
      <div className="content">
        <h2 className="capitalize text-center text-2xl text-amber-500">
          Why Choose library?
        </h2>
      </div>

      <div class="flex flex-row justify-center">
        <div className="mx-20">
          <div className="md:w-fit box-border h-28 w-28 p-4 border-4 m-12 border-orange-300">
            <div className="icon text-7xl">
              <FaHotjar />
            </div>
          </div>
          <div className="box-border h-48 w-48 ">
            <div className="text-2xl text-center text-amber-300">
              {" "}
              EASY AND QUICK
            </div>
            <div  className="text-center text-zinc-900 text-lg font-medium">Get access to the book you purchased online instantly</div>
          </div>
        </div>

        <div className="mx-20">
          <div class="box-border h-28 w-28 p-4 border-4 m-12 border-orange-300">
            <div className="icon text-7xl">
              {" "}
              <FaEllo />
            </div>
          </div>
          <div className="box-border h-48 w-48 ">
            <div className="text-2xl text-center text-amber-300">
              10,000 + books
            </div>
            <div  className="text-center text-zinc-900 text-lg font-medium">Library has books in all your favourite categories</div>
          </div>
        </div>

        <div className="mx-20">
          <div class="box-border h-28 w-28 p-4 border-4 m-12 border-orange-300">
            <div className="icon text-7xl">
              {" "}
              <FaBookOpen />
            </div>
          </div>
          <div className="box-border h-48 w-48 ">
            <div className="text-2xl text-center text-amber-300">
             Affordable
            </div>
            <div className="text-center text-zinc-900 text-lg font-medium">Get your hands on popular books for as little as $10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
