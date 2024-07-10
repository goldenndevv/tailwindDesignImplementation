import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-full grid grid-cols-2 bg-white grow dark:bg-gray-800">
      <div className="col-span-2 sm:col-span-1 flex flex-col justify-center p-4 lg:px-8 max-w-[500px] items-center m-auto w-full">
        <div className="w-full flex flex-col items-center">
          <h2>&#128075;</h2>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-200">
            Welcome Back
          </h2>
          <span className="text-gray-600 text-sm dark:text-gray-400">
            Enter your Login details below
          </span>
          <div className="">
            <button className="w-32 p-2 mr-2 my-4 border border-gray-200 rounded-md transition duration-300 hover:border-blue-400 dark:border-gray-400">
              <div className="relative flex items-center justify-center">
                <Image
                  width={30}
                  height={30}
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google logo"
                  className="w-6 h-6 mr-2"
                />
                <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600">
                  Google
                </span>
              </div>
            </button>
            <button className="w-32 p-2 my-4 border border-gray-200 rounded-md transition duration-300 hover:border-blue-400 dark:border-gray-400">
              <div className="relative flex items-center justify-center">
                <svg
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  className="text-blue-600 mr-2 w-6 h-6"
                >
                  <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                </svg>
                <span className="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600">
                  Facebook
                </span>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <span className="divider w-24 h-px dark:bg-gray-400"></span>
            <span className="text-center text-sm text-gray-600 mx-4 dark:text-gray-400">
              or with email
            </span>
            <span className="divider w-24 h-px dark:bg-gray-400"></span>
          </div>
        </div>

        <div className="mt-4 w-full">
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
              >
                Work Email <span className="text-rose-600">*</span>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md p-1 ring-1 ring-gray-200 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                >
                  Password <span className="text-rose-600">*</span>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md p-1 ring-1 ring-gray-200 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="text-sm mt-4 text-right">
                <a
                  href="#"
                  className="font-semibold text-emerald-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white  hover:bg-emerald-700"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-200">
            {"Don't have an account? "}
            <a
              href="#"
              className="font-semibold leading-6 text-emerald-600 hover:text-indigo-500"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <div className="hidden p-1 sm:flex">
        <Image
          className="rounded-lg w-full object-cover"
          width={1920}
          height={1200}
          src="https://images.unsplash.com/photo-1521661978458-5a2bec6b6e09?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        ></Image>
      </div>
    </div>
  );
};

export default Login;
