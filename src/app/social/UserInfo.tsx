import { ChevronUpIcon, EllipsisIcon, FileTextIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserInfo = () => {
  return (
    <div className="hidden p-6  text-gray-800 dark:text-gray-200 md:flex flex-col justify-between text-sm border-l-2 border-gray-200 h-full dark:border-gray-600 w-[300px] overflow-y-auto">
      <div className="py-4 text-center">
        <Image
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          className="w-24 h-24 rounded-full mx-auto mb-3 ring-4 ring-emerald-700"
          alt=""
        />
        <div className="mt-4">
          <div className="md:text-xl text-base font-medium text-black dark:text-white">
            Monroe Parker
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            @Monroepark
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="grow">
            <strong>RecentFiles</strong>
            <span className="ml-1 text-gray-500 dark:text-gray-600">
              (25 files)
            </span>
          </div>
          <span className="icon-button">
            <ChevronUpIcon />
          </span>
        </div>
        {Array(3)
          .fill(null)
          .map((each, idx) => (
            <div
              key={idx}
              className="flex items-center text-gray-500 dark:text-gray-400"
            >
              <FileTextIcon className="shrink-0" />
              <div className="grow ml-2 truncate">Content.pdf</div>
              <span className="icon-button">
                <EllipsisIcon className="shrink-0" />
              </span>
            </div>
          ))}
      </div>
      <div className="divider" />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="grow">
            <strong>RecentFiles</strong>
            <span className="ml-1 text-gray-500 dark:text-gray-400">
              (12 files)
            </span>
          </div>
          <span className="icon-button">
            <ChevronUpIcon />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 py-2">
          {Array(6)
            .fill(null)
            .map((each, idx) => (
              <Image
                key={idx}
                width={100}
                height={100}
                src="https://images.unsplash.com/photo-1717331282756-ec6e59dd57bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt="image"
                className="rounded-lg shadow w-full h-auto aspect-square"
              />
            ))}
        </div>
      </div>
      <div className="divider" />
      <div className="mt-2 rounded-full cursor-pointer p-2 text-md font-bold text-center border-rose-600 border-2 text-rose-600 hover:text-gray-200 hover:bg-rose-600">
        Block Robert
      </div>
    </div>
  );
};

export default UserInfo;
