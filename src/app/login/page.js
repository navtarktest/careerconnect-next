"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

function Login() {

  const router = useRouter();

  const { login, user } = useAuth();

  // FORM STATE
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // LOADING
  const [loading, setLoading] = useState(false);

  // ERROR
  const [error, setError] = useState("");

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {

      setLoading(true);

      await login(
        formData.email,
        formData.password
      );

      toast.success("Login Successful!");

      router.push("/");

    } catch (err) {

      setError("Invalid email or password");
    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    if (user) {

      router.replace("/");
    }

  }, [router, user]);

  if (user) {
    return null;
  }

  return (
    
    <div className="min-h-screen bg-[#f8fafc]">

      <Navbar />

      <main
        className="flex justify-center px-6"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >

        <div
          className="w-full border border-gray-200 bg-white shadow-xl shadow-gray-200/80"
          style={{ maxWidth: "576px", borderRadius: "22px", padding: "40px" }}
        >

          {/* Heading */}
          <div className="text-center" style={{ marginBottom: "46px" }}>

            <h1
              className="font-extrabold leading-tight text-[#0f172a]"
              style={{ fontSize: "48px" }}
            >

              Welcome Back

            </h1>

            <p
              className="text-gray-500"
              style={{ marginTop: "14px", fontSize: "18px" }}
            >

              Login to continue your career journey

            </p>

          </div>

          {/* Error */}
          {error && (

            <div className="bg-red-100 text-red-600 p-4 rounded-2xl mb-6">

              {error}

            </div>

          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
          >

            {/* Email */}
            <div style={{ marginBottom: "26px" }}>

              <label
                className="block font-semibold text-[#0f172a]"
                style={{ marginBottom: "14px" }}
              >

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 px-5 outline-none transition focus:border-blue-500"
                style={{ height: "58px", borderRadius: "14px" }}
              />

            </div>

            {/* Password */}
            <div style={{ marginBottom: "24px" }}>

              <label
                className="block font-semibold text-[#0f172a]"
                style={{ marginBottom: "14px" }}
              >

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 px-5 outline-none transition focus:border-blue-500"
                style={{ height: "58px", borderRadius: "14px" }}
              />

            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ height: "60px", borderRadius: "14px", fontSize: "18px" }}
            >

              {loading
                ? "Logging In..."
                : "Login"}

            </button>

          </form>

          {/* Register Link */}
          <p
            className="text-center text-gray-700"
            style={{ marginTop: "38px" }}
          >

            Don&apos;t have an account?{" "}

            <Link
              href="/register"
              className="text-blue-600 font-semibold hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </main>

    </div>
  );
}

export default Login;
