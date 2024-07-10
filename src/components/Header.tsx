import React, { useState } from "react";
import { BellIcon, HomeIcon, MessageCircleIcon, UsersIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    icon: <HomeIcon />,
    title: "Home",
  },
  {
    icon: <UsersIcon />,
    title: "Social",
    link: "/social",
    alarm: "a",
  },
  {
    icon: <BellIcon />,
    title: "Schedule",
  },
  {
    icon: <MessageCircleIcon />,
    title: "Message",
  },
];

const SignInContent = () => {
  return (
    <>
      <span className="btn text-base mr-2 font-medium text-dark hover:text-primary dark:text-white  min-w-[100px] flex items-center">
        <Link href="/login" className="w-full text-center">
          Sign in
        </Link>
      </span>
      <span className="btn text-base mr-2 font-medium dark:text-white min-w-[100px] flex items-center">
        Sign Up
      </span>
    </>
  );
};
const LoggedinProfile = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const trigger = useRef(null);
  // const dropdown = useRef(null);

  // // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!dropdown.current) return;
  //     if (
  //       !dropdownOpen ||
  //       dropdown.current.contains(target) ||
  //       trigger.current.contains(target)
  //     )
  //       return;
  //     setDropdownOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  // // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!dropdownOpen || keyCode !== 27) return;
  //     setDropdownOpen(false);
  //   };
  //   document.addEventListener("keydown", keyHandler);
  //   return () => document.removeEventListener("keydown", keyHandler);
  // });

  return (
    <section className="bg-gray-2">
      <div className="container">
        <div className="flex justify-center">
          <div className="relative inline-block">
            <button
              // ref={trigger}
              // onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-left mr-2"
            >
              <div className="relative mr-4 avatar-md rounded-full">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="avatar"
                  className="w-full rounded-full object-cover object-center"
                />
              </div>
              {/* <span className="text-base font-medium text-dark dark:text-white">
                Devid Milinear
              </span> */}
            </button>
            {/* <div
              ref={dropdown}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark-2 dark:shadow-box-dark ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="#0"
                className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Profile
              </a>
              <a
                href="#0"
                className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Settings
              </a>
              <a
                href="#0"
                className="block w-full rounded px-3 py-2 text-left text-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-3"
              >
                Sign Out
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky z-30 flex w-full items-center bg-white dark:bg-slate-800 shadow-lg h-[80px]">
      <div className="container m-auto max-w-[1200px]">
        <div className="relative flex items-center justify-between">
          <div className="w-60 max-w-full px-4 ml-2 object-cover">
            <span className="relative block w-full py-5 min-w-[180px]">
              <Link href="/">
                <Image
                  fill
                  src="https://buzzhive.ca/wp-content/uploads/2019/06/buzz_TV-new1.png"
                  alt="buzzhiveImg"
                  className="w-full object-contain"
                />
              </Link>
            </span>
          </div>
          <div className="flex w-full items-center justify-stretch">
            <div className="grow px-4 text-black">
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] border-2 ring-primary focus:ring-2 md:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[25px] bg-gray-400 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[25px] bg-gray-400 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[25px] bg-gray-400 dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`m-auto right-4 top-full absolute z-20 w-full max-w-[200px] rounded-lg bg-white p-2 shadow-lg dark:bg-dark-2 md:static md:block md:w-full md:max-w-[500px] md:bg-transparent md:shadow-none md:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block md:flex justify-between">
                  {menuItems.map((each, idx) => (
                    <li key={idx} className="relative">
                      <Link href={each.link || "/"}>
                        <p className="icon flex py-2 my-2 font-medium hover:text-primary md:my-0 md:ml-2 md:inline-flex">
                          {each.icon}
                          <span className="ml-4 md:hidden">{each.title}</span>
                        </p>
                      </Link>

                      {each.alarm && (
                        <span className="absolute right-3 top-1 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-rose-600 dark:border-dark"></span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className=" hidden justify-end pr-2 md:flex text-blue-600">
              {true ? <SignInContent /> : <LoggedinProfile />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
