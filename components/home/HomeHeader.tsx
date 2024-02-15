import { FaSearch } from "react-icons/fa";
import React from "react";
import Image from "next/image";

function HomeHeader() {
  return (
    <div className="container lg:px-32 flex flex-wrap justify-between mt-16">
      <div className="flex flex-wrap md:flex-col w-[100%] min-[769px]:w-[55%] mt-8">
        <div className="font-serif font-bold text-4xl lg:text-5xl max-[769px]:text-center max-[768px]:m-auto max-[640px]:w-[100%] max-[768px]:w-[60%] md:max-w-[80%] tracking-wide ">
          Read the most interesting articles
        </div>
        <div className="font-serif text-lg max-[768px]:text-center max-[768px]:mx-auto mt-8 md:max-w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div className="px-2 sm:shadow-lg rounded-lg flex flex-col gap-2 justify-between  sm:flex-row py-3 max-[768px]:mx-auto w-[80%]  mt-8 ">
          <div className="relative flex  max-sm:shadow-lg rounded-lg md:w-3/4">
            <div className="absolute left-3 pt-3.5 ">
              <FaSearch color="grey" size={"1.5rem"}></FaSearch>
            </div>
            <input
              type="text"
              placeholder="Search Article..."
              className="rounded-md border-hidden pl-12 text-gray-900 ring-slate-500 ring-0 sm:text-sm sm:leading-6 p-3 w-full"
            />{" "}
          </div>
          <button className="py-2 px-3 rounded-xl text-center text-white text-base bg-blue-700 ms:w-1/4">
            {" "}
            Search
          </button>
        </div>
        <div className="flex flex-wrap flex-row mt-8 max-[768px]:ml-8 gap-1">
          <div className="text-lg font-bold mt-1">Popular Tags :</div>
          <div className="bg-slate-400 rounded-xl text-white font-semibold text-center ml-3 p-2 max-w-fit">
            Design
          </div>
          <div className="bg-slate-400 rounded-xl text-white font-semibold text-center ml-3 p-2 max-w-fit">
            User Experience
          </div>
          <div className="bg-slate-400 rounded-xl text-white font-semibold text-center ml-3 p-2 max-w-fit">
            User Interface
          </div>
        </div>
      </div>
      <div className="w-[45%] hidden min-[769px]:block">
        <Image
          src={"/images/LiveChat.svg"}
          alt="HomeImage"
          width={100}
          height={100}
          className="cursor-pointer w-[100%] h-auto"
        />
      </div>
    </div>
  );
}

export default HomeHeader;
