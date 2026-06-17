"use client";
import React, { useState } from "react";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

import toast from "react-hot-toast";

function Navbar() {

  const { user, userRole,logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // HANDLE LOGOUT
  const handleLogout = async () => {

    try {

      await logout();

      toast.success("Logged Out Successfully!");

      closeMenu();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <nav className="cc-navbar bg-white shadow-sm border-b border-gray-100">

      <div
        className="cc-navbar-inner mx-auto flex items-center justify-between px-6 xl:px-0"
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

        {/* Desktop Menu */}
        <div className="cc-navbar-menu cc-navbar-desktop-menu hidden md:flex items-center gap-10 font-semibold text-[#0f172a]">

          <Link
            href="/"
            className="hover:text-blue-600 transition"
            onClick={closeMenu}
          >

            Home

          </Link>

          <Link
            href="/jobs"
            className="hover:text-blue-600 transition"
            onClick={closeMenu}
          >

            Jobs

          </Link>

          {userRole === "employer" && (

  <Link
    href="/post-job"
    className="hover:text-blue-600 transition"
    onClick={closeMenu}
  >

    Post Job

  </Link>

)}

{userRole === "employer" && (

  <Link
    href="/employer-dashboard"
    className="hover:text-blue-600 transition"
    onClick={closeMenu}
  >

    Employer Dashboard

  </Link>

)}

{userRole === "candidate" && (

  <Link
    href="/applications"
    className="hover:text-blue-600 transition"
    onClick={closeMenu}
  >

    Applications

  </Link>

)}

        </div>

        {/* Right Side */}
        <div className="cc-navbar-actions cc-navbar-desktop-actions flex items-center gap-4">

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
                onClick={closeMenu}
              >

                Login

              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                onClick={closeMenu}
              >

                Register

              </Link>
            </>

          )}

        </div>

        <button
          type="button"
          className={`cc-navbar-toggle ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`cc-mobile-menu ${menuOpen ? "is-open" : ""}`}>

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/jobs" onClick={closeMenu}>
            Jobs
          </Link>

          {userRole === "employer" && (
            <Link href="/post-job" onClick={closeMenu}>
              Post Job
            </Link>
          )}

          {userRole === "employer" && (
            <Link href="/employer-dashboard" onClick={closeMenu}>
              Employer Dashboard
            </Link>
          )}

          {userRole === "candidate" && (
            <Link href="/applications" onClick={closeMenu}>
              Applications
            </Link>
          )}

          <div className="cc-mobile-menu-actions">
            {user ? (
              <>
                <p>{user.email}</p>
                <button type="button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={closeMenu}>
                  Login
                </Link>
                <Link href="/register" onClick={closeMenu}>
                  Register
                </Link>
              </>
            )}
          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
