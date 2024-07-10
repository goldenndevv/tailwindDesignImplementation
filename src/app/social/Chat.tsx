import {
  CameraIcon,
  ChevronRightIcon,
  CircleChevronRightIcon,
  CirclePlusIcon,
  HeartIcon,
  InfoIcon,
  MoveRightIcon,
  PhoneIcon,
  SmileIcon,
  ToggleLeftIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Chat: React.FC<{
  viewLeftSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ viewLeftSideBar }) => {
  return (
    <div
      className="flex-1 justify-between h-full flex flex-col"
      onClick={() => {
        viewLeftSideBar(false);
      }}
    >
      <div className="flex items-center justify-between gap-2 w- px-6 py-3.5 z-10 border-b dark:border-slate-700 uk-animation-slide-top-medium">
        <div className="flex items-center sm:gap-4 gap-2">
          <span
            className="sm:hidden icon-button"
            onClick={(e) => {
              e.stopPropagation();
              viewLeftSideBar(true);
            }}
          >
            <ChevronRightIcon />
          </span>

          <div
            className="relative cursor-pointer max-md:hidden shrink-0"
            uk-toggle="target: .rightt ; cls: hidden"
          >
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="avatar"
              className="w-8 h-8 rounded-full shadow"
            />
            <div className="w-2 h-2 bg-teal-500 rounded-full absolute right-0 bottom-0 m-px"></div>
          </div>
          <div
            className="cursor-pointer"
            uk-toggle="target: .rightt ; cls: hidden"
          >
            <div className="text-base font-bold dark:text-gray-200">
              Monroe Parker
            </div>
            <div className="text-xs text-green-500 font-semibold"> Online</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hover:bg-slate-100 p-1.5 rounded-full icon-button"
          >
            <PhoneIcon />
          </button>
          <button
            type="button"
            className="hover:bg-slate-100 p-1.5 rounded-full icon-button"
          >
            <CameraIcon />
          </button>
          <button
            type="button"
            className="hover:bg-slate-100 p-1.5 rounded-full icon-button"
            uk-toggle="target: .rightt ; cls: hidden"
            aria-expanded="true"
          >
            <InfoIcon />
          </button>
        </div>
      </div>

      <div className="grow w-full p-5 py-10 overflow-y-auto md:h-[calc(100vh-204px)] h-[calc(100vh-195px)]">
        <div className="py-10 text-center text-sm lg:pt-8">
          <Image
            width={100}
            height={100}
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            className="w-24 h-24 rounded-full mx-auto mb-3"
            alt=""
          />
          <div className="mt-8">
            <div className="md:text-xl text-base font-medium text-black dark:text-white">
              Monroe Parker
            </div>
            <div className="text-gray-500 text-sm   dark:text-white/80">
              @Monroepark
            </div>
          </div>
          <div className="mt-3.5">
            <a
              href="timeline.html"
              className="inline-block rounded-lg px-4 py-1.5 text-sm font-semibold bg-gray-100"
            >
              View profile
            </a>
          </div>
        </div>

        <div className="text-sm font-medium space-y-6">
          {/* <!-- received --> */}
          <div className="flex gap-3">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt=""
              className="w-9 h-9 rounded-full shadow"
            />
            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gray-100">
              I’m selling a photo of a sunset. It’s a print on canvas, signed by
              the photographer. Do you like it? 😊
            </div>
          </div>

          {/* <!-- sent --> */}
          <div className="flex gap-2 flex-row-reverse items-end">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt=""
              className="w-5 h-5 rounded-full shadow"
            />
            <div className="px-4 py-2 rounded-[20px] max-w-sm bg-gradient-to-tr from-sky-500 to-blue-500 text-white shadow">
              Wow, it’s beautiful. How much ? 😍
            </div>
          </div>

          {/* <!-- time --> */}
          <div className="flex justify-center ">
            <div className="font-medium text-gray-500 text-sm dark:text-white/70">
              April 8,2023,6:30 AM
            </div>
          </div>

          {/* <!-- sent media--> */}
          <div className="flex gap-2 flex-row-reverse items-end">
            <Image
              width={100}
              height={100}
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt=""
              className="w-4 h-4 rounded-full shadow"
            />

            <a className="block rounded-[18px] overflow-hidden h-full">
              <Image
                width={800}
                height={800}
                src="https://images.unsplash.com/photo-1717331282756-ec6e59dd57bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
                alt="image"
                className="block max-w-full max-h-52 w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center md:gap-4 gap-2 md:p-3 p-2 overflow-hidden">
        <div className="flex items-center gap-2 h-full dark:text-white -mt-1.5">
          <button
            type="button"
            className="shrink-0  icon-button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <CirclePlusIcon />
          </button>
          {/* <div
            className="dropbar pt-36 h-60 bg-gradient-to-t via-white from-white via-30% from-30% dark:from-slate-900 dark:via-900 uk-drop"
            uk-drop="stretch: x; target: #message__wrap ;animation:  slide-bottom ;animate-out: true; pos: top-left; offset:10 ; mode: click ; duration: 200"
          >
            <div
              className="sm:w-full p-3 flex justify-center gap-5"
              uk-scrollspy="target: > button; cls: uk-animation-slide-bottom-small; delay: 100;repeat:true"
            >
              <button
                type="button"
                className="bg-sky-50 text-sky-600 border border-sky-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
              >
                <SmileIcon />
              </button>
              <button
                type="button"
                className="bg-green-50 text-green-600 border border-green-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"

              ></button>
              <button
                type="button"
                className="bg-pink-50 text-pink-600 border border-pink-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"

              >
                <ion-icon
                  className="text-3xl flex md hydrated"
                  name="document-text"
                  role="img"
                  aria-label="document text"
                ></ion-icon>
              </button>
              <button
                type="button"
                className="bg-orange-50 text-orange-600 border border-orange-100 shadow-sm p-2.5 rounded-full shrink-0 duration-100 hover:scale-[1.15] dark:bg-dark3 dark:border-0"
                style="opacity: 0;"
              >
                <ion-icon
                  className="text-3xl flex md hydrated"
                  name="gift"
                  role="img"
                  aria-label="gift"
                ></ion-icon>
              </button>
            </div>
          </div> */}

          <button
            type="button"
            className="shrink-0 icon-button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <SmileIcon />
          </button>
          {/* <div
            className="dropbar p-2 uk-drop"
            uk-drop="stretch: x; target: #message__wrap ;animation: uk-animation-scale-up uk-transform-origin-bottom-left ;animate-out: true; pos: top-left ; offset:2; mode: click ; duration: 200 "
          >
            <div className="sm:w-60 bg-white shadow-lg border rounded-xl  pr-0 dark:border-slate-700 dark:bg-dark3">
              <h4 className="text-sm font-semibold p-3 pb-0">Send Imogi</h4>

              <div className="grid grid-cols-5 overflow-y-auto max-h-44 p-3 text-center text-xl">
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😊{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🤩{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😎
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🥳{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😂{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🥰{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😡{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😊{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🤩{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😎
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🥳{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😂{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🥰{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😡{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🤔{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😊{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🤩{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😎
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  🥳{" "}
                </div>
                <div className="hover:bg-secondery p-1.5 rounded-md hover:scale-125 cursor-pointer duration-200">
                  {" "}
                  😂{" "}
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="relative flex-1">
          <textarea
            placeholder="Write your message"
            rows={1}
            className="w-full resize-none bg-gray-200 rounded-full px-4 p-2"
            spellCheck="false"
          ></textarea>
        </div>

        <button type="button" className="flex dark:text-white icon-button">
          <HeartIcon />
        </button>
      </div>
    </div>
  );
};

export default Chat;
