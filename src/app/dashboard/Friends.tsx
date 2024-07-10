"use client";

import { CheckIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Friends = () => {
  return (
    <div className="panel">
      <div className="flex justify-between items-center">
        <span className="font-bold">Friend Requests</span>
        <span className="cursor-pointer text-blue-400 text-sm">View all</span>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {Array(2)
          .fill(null)
          .map((each, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-between"
            >
              <div className="shrink-0 relative avatar-sm mr-2">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="avatar"
                  className="w-full rounded-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col text-xs grow overflow-hidden">
                <span className="font-bold">Savannah Nguyon</span>
                <div className="flex items-center">
                  <div className="shrink-0 relative flex -space-x-2 my-1 overflow-hidden">
                    {Array(3)
                      .fill(null)
                      .map((each, idx) => (
                        <div key={idx} className="relative avatar-xs">
                          <Image
                            fill
                            className="inline-block rounded-full ring-2 ring-white dark:ring-gray-800 aspect-square"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="img"
                          />
                        </div>
                      ))}
                  </div>
                  <span className="ml-1 truncate">
                    7 Mutual Friendssdfsdf sdf sdf s
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex gap-1">
                <span className="icon-button bg-blue-400 text-white hover:bg-blue-600 p-1">
                  <CheckIcon size={12} />
                </span>
                <span className="icon-button bg-gray-200 hover:bg-gray-300 p-1 text-gray-600">
                  <XIcon size={12} />
                </span>
              </div>
            </div>
          ))}
      </div>
      <div className="h-px my-2 bg-gray-200"></div>
      <div className="flex justify-between items-center">
        <span className="font-bold">Activity</span>
        <span className="cursor-pointer text-blue-400 text-sm">View all</span>
      </div>
      <div className="flex flex-col text-xs">
        {Array(6)
          .fill(null)
          .map((each, idx) => (
            <div key={idx} className="flex items-center row-item p-2">
              <div className="shrink-0 relative avatar-sm mr-2">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="avatar"
                  className="w-full rounded-full object-cover object-center"
                />
              </div>
              <div className="grow flex flex-col overflow-hidden">
                <span className="font-bold">Arman Rokni</span>
                <span className="truncate">
                  You will face many defeats in life but ask
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Friends;
