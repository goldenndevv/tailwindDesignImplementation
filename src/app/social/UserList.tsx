import React from "react";
import { userList } from "@/data/social";
import {
  CircleCheckIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";

const UserList: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div
      className={`${
        visible ? "absolute left-0" : "hidden"
      }  animate-none sm:flex flex-col justify-between border-r-2 h-full border-gray-200 dark:border-gray-600 z-20 bg-white dark:bg-gray-800 overflow-y-auto`}
    >
      <div className="shrink-0 p-4 border-b dark:border-slate-700">
        <div className="hidden sm:flex mt-2 items-center justify-between">
          <h2 className="text-2xl font-bold text-black ml-1 dark:text-gray-200">
            Chats
          </h2>

          {/* <!-- right action buttons --> */}
          <div className="flex items-center gap-2.5">
            <button
              className="group icon-button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <SettingsIcon />
            </button>

            <button className=" icon-button">
              <CircleCheckIcon />
            </button>

            {/* <!-- mobile toggle menu -->
            <button
              type="button"
              className="md:hidden"
              uk-toggle="target: #side-chat ; cls: max-md:-translate-x-full"
              aria-expanded="true"
            >
              <SearchIcon />
            </button> */}
          </div>
        </div>

        {/* <!-- search --> */}
        <div className="relative mt-4 ">
          <div className="absolute left-3 bottom-1/2 translate-y-1/2 flex">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full !pl-10 !py-2 !rounded-lg bg-gray-200"
          />
        </div>
      </div>

      <div className="grow flex flex-col p-2 overflow-y-auto">
        {userList.map((user, idx) => (
          <a
            key={idx}
            href="#"
            className="relative flex items-center gap-4 p-2 duration-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <div className="relative w-14 h-14 shrink-0">
              <Image
                width={100}
                height={100}
                src={user.avatar}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
              <div className="w-4 h-4 absolute bottom-0 right-0  bg-green-500 rounded-full border border-white dark:border-gray-800"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="mr-auto text-sm text-black dark:text-gray-200 font-medium">
                  {user.name}
                </div>
                <div className="text-xs font-light text-gray-500 dark:text-gray-200/70">
                  {user.time}
                </div>
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="font-medium overflow-hidden text-ellipsis text-sm whitespace-nowrap dark:text-gray-200">
                {user.lastMsg}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UserList;
