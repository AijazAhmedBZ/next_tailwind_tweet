import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import Link from "next/link";

const Tweet = () => {
  return (
    <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
      <img className="h-12 w-12 rounded-full mr-3" src="logo.jpg" alt="logo" />
      <div className="w-full">
        <div className="flex">
          <Link href={"https://twitter.com/AijazAhmedBZ"}>
            <strong className="text-gray-800 mr-1">Aijaz Ahmed</strong>
            <span className="text-gray-500 mr-1">@AijazAhmedBZ</span>
          </Link>
          <span className="text-gray-500 mr-1">&middot;</span>
          <span className="text-gray-500">Mar 28</span>
          <div className="ml-auto">
            <GoKebabHorizontal />
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ipsum
          quae, illum amet fugiat sed fugit
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex items-center">
            <FaRegComment className="icon" />
            <span className="text">20</span>
          </div>
          <div className="flex items-center">
            <FaRetweet className="icon" />
            <span className="text">17</span>
          </div>
          <div className="flex items-center">
            <AiOutlineHeart className="icon" />
            <span className="text">215</span>
          </div>
          <div className="flex items-center">
            <BsUpload className="icon" />
          </div>
          <div className="flex items-center">
            <FiBarChart2 className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
