"use client";
import React from "react";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import toast from "react-hot-toast";

function Navbar() {

  const { user, userRole,logout } = useAuth();

  // HANDLE LOGOUT
  const handleLogout = async () => {

    try {

      await logout();

      toast.success("Logged Out Successfully!");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <nav className="bg-white shadow-sm border-b border-gray-100">

      <div
        className="mx-auto flex items-center justify-between px-6 xl:px-0"
        style={{ maxWidth: "1224px", height: "88px" }}
      >

        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold leading-none text-blue-600"
          style={{ fontSize: "30px" }}
        >

          CareerConnect

        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-[#0f172a]">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
          >

            Home

          </Link>

          <Link
            href="/jobs"
            className="hover:text-blue-600 transition"
          >

            Jobs

          </Link>

          {userRole === "employer" && (

  <Link
    href="/post-job"
    className="hover:text-blue-600 transition"
  >

    Post Job

  </Link>

)}

{userRole === "employer" && (

  <Link
    href="/employer-dashboard"
    className="hover:text-blue-600 transition"
  >

    Employer Dashboard

  </Link>

)}

{userRole === "candidate" && (

  <Link
    href="/applications"
    className="hover:text-blue-600 transition"
  >

    Applications

  </Link>

)}

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {user ? (

            <>
              {/* User Email */}
              <div className="hidden md:block text-gray-600 font-medium">

                {user.email}

              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-medium transition"
              >

                Logout

              </button>
            </>

          ) : (

            <>
              {/* Login */}
              <Link
                href="/login"
                className="font-semibold text-[#0f172a] hover:text-blue-600 transition"
              >

                Login

              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
              >

                Register

              </Link>
            </>

          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
