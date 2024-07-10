"use client";

import { FilePenLineIcon, ScrollIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Messages = () => {
  return (
    <div className="panel flex flex-col gap-1">
      <div className="flex items-center">
        <strong className="grow">Messages</strong>
        <div className="icon-button">
          <FilePenLineIcon size={18} />
        </div>
      </div>
      <div className="flex bg-gray-100 p-1 rounded-full items-center gap-2 px-2 justify-between dark">
        <SearchIcon size={14} />
        <input
          className="grow bg-transparent w-full text-sm p-1"
          placeholder="Search messages"
        />
        <ScrollIcon size={14} />
      </div>
      <div className="text-sm font-medium text-center mb-2 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {Array(3)
            .fill(null)
            .map((each, idx) => (
              <li key={idx} className="me-2">
                <span className="inline-block py-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer">
                  Tab {idx}
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col text-xs">
        {Array(6)
          .fill(null)
          .map((each, idx) => (
            <div
              key={idx}
              className="flex items-center row-item p-2 justify-between"
            >
              <div className="relative avatar-sm mr-2 shrink-0">
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
                  Active 30min ago asdf asdf asdf asdf asd f
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Messages;
