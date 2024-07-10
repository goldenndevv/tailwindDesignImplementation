"use client";

import { SendIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Birthday = () => {
  return (
    <div className="panel">
      <div className="flex justify-between items-center">
        <span className="font-bold">Birthdays</span>
        <span className="cursor-pointer text-blue-400 text-sm">See All</span>
      </div>
      <div className="h-px my-2 bg-gray-200"></div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex flex-row items-center justify-between">
          <div className="shrink-0 relative avatar-sm mr-2">
            <Image
              fill
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="avatar"
              className="w-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex flex-col text-xs grow overflow-hidden">
            <span className="font-bold">Savannah Nguyon</span>
            <span className="truncate">Birthday today</span>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <input
            className="border border-gray-200 bg-gray-100 w-full rounded-lg p-1 px-2 text-sm"
            placeholder="Write on his inbox"
          />
          <span className="icon-button text-sky-600 rounded-lg bg-gray-100 bg-">
            <SendIcon size={16} />
          </span>
        </div>

        <div className="border border-gray-200 dark:border-gray-600 bg-gray-100 flex flex-row items-center justify-between rounded-lg p-2 dark:bg-gray-700">
          <div className="shrink-0 relative avatar-sm mr-2">
            <Image
              fill
              src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="gift"
              className="w-full rounded-lg object-cover object-center aspect-square"
            />
          </div>
          <div className="flex flex-col text-xs grow overflow-hidden">
            <span className="font-bold">Upcoming birthdays</span>
            <span className="truncate">
              See 12 others have upcoming birthdays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
