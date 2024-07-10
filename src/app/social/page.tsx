"use client";

import React, { useState } from "react";
import UserList from "./UserList";
import Chat from "./Chat";
import UserInfo from "./UserInfo";

const Social = () => {
  const [viewLeftSideBar, setViewLeftSideBar] = useState(false);
  return (
    <div className="relative flex bg-white dark:bg-gray-800 h-[calc(100vh-80px)] justify-start z-10">
      <UserList visible={viewLeftSideBar} />
      <Chat viewLeftSideBar={setViewLeftSideBar} />
      <UserInfo />
    </div>
  );
};

export default Social;
