"use client";

import {
  CameraIcon,
  CircleCheckIcon,
  SendIcon,
  Share2Icon,
  ShareIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const RecentEvent = () => {
  return (
    <div className="panel">
      <div className="flex justify-between items-center">
        <span className="font-bold">Recent Event</span>
        <span className="cursor-pointer text-blue-400 text-sm">See All</span>
      </div>
      <div className="h-px my-2 bg-gray-200"></div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col shrink-0 relative w-10 mr-2 text-center rounded-md shadow">
            <div className="bg-rose-500 text-[10px] text-gray-200 rounded-t-md">
              Jan
            </div>
            <div className="bg-white text-xs font-bold dark:text-gray-950">
              26
            </div>
            <div className="bg-white text-[10px] rounded-b-md dark:text-gray-950">
              7 PM
            </div>
          </div>
          <div className="flex flex-col text-xs grow overflow-hidden">
            <span className="text-[10px] font-bold">
              Hotel Sarina Int. Dhaka
            </span>
            <span className="font-bold">Savannah Nguyon</span>
            <span className="text-[10px] truncate">Birthday today</span>
          </div>
        </div>
        <div className="flex gap-1 justify-start items-center">
          <div className="flex p-1 cursor-pointer justify-between items-center transition-colors hover:bg-gray-200 rounded-lg border dark:hover:dark text-[8px]">
            <div className="p-px mx-px">
              <StarIcon size={12} />
            </div>
            <span className="grow mr pl-0.5 border-l-[1px]">
              <span className="font-bold">156</span> interested
            </span>
          </div>
          <div className="flex p-1 cursor-pointer justify-between items-center transition-colors hover:bg-gray-200 rounded-lg border dark:hover:dark text-[8px]">
            <div className="p-px mx-px">
              <CircleCheckIcon size={12} />
            </div>
            <span className="grow mr-px pl-0.5 border-l-[1px]">
              <span className="font-bold">120</span> Going
            </span>
          </div>
          <div className="flex p-1 cursor-pointer justify-between items-center transition-colors hover:bg-gray-200 rounded-lg border dark:hover:dark text-[8px]">
            <div className="p-px mx-1">
              <Share2Icon size={12} />
            </div>
            <span className="grow mr-px">
              <span className="font-bold"></span>Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
