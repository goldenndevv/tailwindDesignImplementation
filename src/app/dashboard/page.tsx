"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import Profile from "./Profile";

import {
  BookmarkIcon,
  CameraIcon,
  ChevronDownIcon,
  EllipsisIcon,
  HeartIcon,
  MessageCircleIcon,
  PlusIcon,
  Share2Icon,
  SmileIcon,
} from "lucide-react";
import Messages from "./Messages";
import Friends from "./Friends";
import Birthday from "./Birthday";
import { favPages, menuList, users } from "@/data/dashboard";
import Image from "next/image";
import RecentEvent from "./RecentEvent";

const Dashboard = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* <Header /> */}
      <div className="grid m-auto max-w-[1200px] p-4 min-h-screen gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 order-1 col-span-1">
          <Profile />
          <div className="panel">
            <div className="flex flex-col gap-1">
              {menuList.map((each, idx) => (
                <div
                  key={idx}
                  className="flex p-1 justify-between items-center row-item"
                >
                  <div className="p-1 ml-1">{each.icon}</div>
                  <span className="grow ml-2">{each.title}</span>
                  {each.badge !== undefined && (
                    <span className="badge bg-red-500 mx-2">{each.badge}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full h-px bg-gray-200 my-1"></div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400 p-2">PAGES YOU LIKE</span>
              {favPages.map((each, idx) => (
                <div
                  key={idx}
                  className="flex p-1 justify-between items-center row-item"
                >
                  <div
                    className={`p-1 flex-shrink-0 ml-1 rounded-lg text-center primary text-white w-[32px] h-[32px] bg-primary`}
                  >
                    {each.icon}
                  </div>
                  <span className="grow ml-2">{each.title}</span>
                </div>
              ))}
              <div className="p-1 flex cursor-pointer items-center">
                <div className="p-1 ml-1 icon-button bg-gray-100 dark:text-black">
                  <ChevronDownIcon />
                </div>
                <span className="grow ml-2">View All</span>
              </div>
            </div>
          </div>
          <Birthday />
          <RecentEvent />
        </div>
        <div className="flex flex-col gap-4 order-2 sm:order-3 sm:col-span-2 lg:order-2">
          <div className="panel flex flex-nowrap overflow-y-auto">
            <div className="shrink-0 flex-none flex flex-col items-center mr-4 cursor-pointer">
              <div className="relative p-1 bg-gray-300 rounded-full w-full aspect-square dark:bg-gray-600">
                <Image
                  width={50}
                  height={50}
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="avatar"
                  className="w-full rounded-full object-cover object-center avatar-lg ring-2 ring-gray-50"
                />
                <span className="absolute right-1 bottom-1 block rounded-full border-[2.3px] border-white bg-purple-600 dark:border-dark text-white p-1 text-center">
                  <PlusIcon size={8} strokeWidth={4} />
                </span>
              </div>
              <span className="truncate max-w-[64px]">user</span>
            </div>
            {users.map((user, idx) => (
              <div
                key={idx}
                className="shrink-0 flex-none flex flex-col items-center mr-4 cursor-pointer"
              >
                <div className="relative avatar-gradient w-full aspect-square">
                  <Image
                    width={50}
                    height={50}
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="avatar"
                    className="w-full rounded-full object-cover object-center avatar-lg ring-2 ring-gray-50"
                  />
                </div>
                <span className="truncate max-w-[64px]">{user.name}</span>
              </div>
            ))}
          </div>
          <div className="panel">
            <div className="relative bg-gray-100 border-gray-200 dark:bg-gray-700 border dark:border-gray-600 p-2 rounded-lg">
              <div className="flex items-center">
                <div className="relative avatar-md mr-2">
                  <Image
                    fill
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                    alt="avatar"
                    className="w-full rounded-full object-cover object-center"
                  />
                </div>
                <div className="grow">{`What's on your mind?`}</div>
              </div>
              <span className="absolute right-1 bottom-1 block">
                <SmileIcon className="text-gray-300" size={18} />
              </span>
            </div>
            <div className="flex mt-2 gap-1">
              {Array(3)
                .fill(null)
                .map((each, idx) => (
                  <div
                    key={idx}
                    className="flex p-1 cursor-pointer justify-between items-center transition-colors hover:bg-gray-200 rounded-lg border text-xs dark:hover:dark"
                  >
                    <div className="p-px mx-1">
                      <CameraIcon size={12} />
                    </div>
                    <span className="grow mr-1">Go Live</span>
                  </div>
                ))}
            </div>
          </div>
          {Array(2)
            .fill(null)
            .map((each, idx) => (
              <div className="panel" key={idx}>
                <div className="flex items-center relative">
                  <div className="relative avatar-md mr-2">
                    <Image
                      fill
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="avatar"
                      className="w-full rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="grow flex flex-col">
                    <span className="font-bold">{`What's on your mind?`}</span>
                    <span>New York City, NY</span>
                  </div>
                  <div className="icon-button">
                    <EllipsisIcon />
                  </div>
                </div>
                <Image
                  width={1000}
                  height={1000}
                  src="https://images.unsplash.com/photo-1572587356426-b33bf42f999b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="img"
                  className="rounded-lg w-full my-3"
                />
                <div className="flex gap-2 ">
                  <div className="icon-button dark:text-white dark:hover:dark">
                    <HeartIcon
                      fill="rgb(168 85 247 / var(--tw-bg-opacity))"
                      strokeWidth={0}
                      size={20}
                    />
                  </div>
                  <div className="icon-button dark:text-white dark:hover:dark">
                    <MessageCircleIcon size={20} />
                  </div>
                  <div className="icon-button dark:text-white dark:hover:dark">
                    <Share2Icon size={20} />
                  </div>
                  <div className="grow"></div>
                  <div className="icon-button dark:text-white dark:hover:dark">
                    <BookmarkIcon size={20} />
                  </div>
                </div>
                <div className="relative flex -space-x-2 my-2">
                  {Array(5)
                    .fill(null)
                    .map((each, idx) => (
                      <Image
                        width={100}
                        height={100}
                        key={idx}
                        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="img"
                      />
                    ))}
                </div>
                <div>
                  <strong>afshint2y</strong>
                  {` We know the voices in our heads
                aren't real, but sometimes their ideas are just too good to
                ignore.`}
                </div>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-4 order-3 sm:order-2 sm:col-span-1 lg:order-3">
          <Messages />
          <Friends />
          <Birthday />
          <RecentEvent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
