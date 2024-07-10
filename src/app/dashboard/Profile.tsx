"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="panel flex flex-col items-center gap-1">
      <div className="relative avatar-lg rounded-full">
        <Image
          fill
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
          alt="avatar"
          className="w-full rounded-full object-cover object-center"
        />
        <span className="absolute -right-0.5 -bottom-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
      </div>
      <span className="font-bold text-lg">Update Your Profile</span>
      <span className="text-sm text-slate-400">
        {`Let's complete your profile!`}
      </span>
      <div className="my-2 h-3 w-full bg-neutral-200 dark:bg-neutral-600 rounded-lg">
        <div className="h-3 bg-amber-500 w-1/4 rounded-lg"></div>
      </div>
      <div className="flex justify-between w-full btn text-white font-bold">
        <span>Update Now</span>
        <span className="p-1 bg-black/40 text-white rounded-full">
          <ArrowRightIcon size={16} />
        </span>
      </div>
    </div>
  );
};

export default Profile;
