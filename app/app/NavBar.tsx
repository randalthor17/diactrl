"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DefaultSession } from "next-auth";
import { signIn } from "next-auth/react";

export function NavBar({ user }: { user: DefaultSession["user"] }) {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <nav className="top-0 left-0 z-20 w-full bg-white px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="https://flowbite.com/" className="flex items-center">
            {/* <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              DiaTracker
            </span>
          </a>
          <div className="flex md:order-2">
            {user?.email ? (
              <Link href="/" className="h-8 w-8 rounded-full md:h-12 md:w-12">
                <Image
                  src={user?.image as string}
                  alt="profile photo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full md:h-12 md:w-12"
                />
              </Link>
            ) : (
              <button
                className="bg-blue-500 py-1 px-2 rounded-lg text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            )}
            <button
              onClick={() => setNavbar(!navbar)}
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`w-full items-center justify-between md:order-1 md:flex md:w-auto ${
              navbar ? "" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="md:text-md mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-14 md:border-0 md:bg-white md:font-medium">
              <li>
                <Link
                  href="/"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/calender"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                  aria-current="page"
                >
                  Calender
                </Link>
              </li>
              <li>
                <Link
                  href="/myplan"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  My Plan
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
