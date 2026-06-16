"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";

function Register() {

  const router = useRouter();

  const { register, user } = useAuth();

  // FORM STATE
  const [formData, setFormData] = useState({
  email: "",
  password: "",
  role: "candidate",
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

      await register(
        formData.email,
        formData.password,
        formData.role
      );

      toast.success("Account Created Successfully!");

      router.push("/");

    } catch (err) {

      setError(err.message);
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

              Create Account

            </h1>

            <p
              className="text-gray-500"
              style={{ marginTop: "14px", fontSize: "18px" }}
            >

              Join CareerConnect today

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
            <div style={{ marginBottom: "26px" }}>

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

            {/* Role */}
<div style={{ marginBottom: "24px" }}>

  <label
    className="block font-semibold text-[#0f172a]"
    style={{ marginBottom: "14px" }}
  >

    Account Type

  </label>

  <select
    name="role"
    value={formData.role}
    onChange={handleChange}
    className="w-full border border-gray-200 px-5 outline-none transition focus:border-blue-500"
    style={{ height: "58px", borderRadius: "14px" }}
  >

    <option value="candidate">
      Candidate
    </option>

    <option value="employer">
      Employer
    </option>

  </select>

</div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ height: "60px", borderRadius: "14px", fontSize: "18px" }}
            >

              {loading
                ? "Creating Account..."
                : "Register"}

            </button>

          </form>

          {/* Login Link */}
          <p
            className="text-center text-gray-700"
            style={{ marginTop: "38px" }}
          >

            Already have an account?{" "}

            <Link
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </main>

    </div>
  );
}

export default Register;
