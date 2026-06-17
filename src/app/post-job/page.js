"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function PostJob() {
  const router = useRouter();
  const { addJob } = useJobs();
  const { loading: authLoading, user, userRole } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    type: "Full Time",
    description: "",
  });

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (userRole !== "employer") {
      router.replace("/dashboard");
    }
  }, [authLoading, router, user, userRole]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await addJob({
        ...formData,
        postedBy: user.uid,
        postedByEmail: user.email,
        createdAt: new Date().toISOString(),
      });

      toast.success("Job Posted Successfully!");
      router.push("/jobs");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user || userRole !== "employer") {
    return null;
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      <main
        className="cc-form-page-container mx-auto"
        style={{
          maxWidth: "760px",
          paddingTop: "72px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="cc-form-card border border-gray-200 bg-white shadow-xl shadow-gray-200/80"
          style={{ borderRadius: "22px", padding: "36px" }}
        >
          <div className="cc-form-header" style={{ marginBottom: "38px" }}>
            <h1
              className="font-extrabold leading-tight text-[#0f172a]"
              style={{ fontSize: "44px" }}
            >
              Post A New Job
            </h1>
            <p
              className="text-gray-500"
              style={{ marginTop: "12px", fontSize: "17px" }}
            >
              Reach thousands of professionals instantly.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="location"
              placeholder="Job Location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-200 px-5 outline-none transition focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            >
              <option value="Full Time">Full Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <textarea
              name="description"
              rows="6"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-5 py-4 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{
                minHeight: "160px",
                borderRadius: "14px",
                marginBottom: "26px",
                resize: "vertical",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              style={{ height: "60px", borderRadius: "14px", fontSize: "18px" }}
            >
              {loading ? "Posting Job..." : "Post Job"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PostJob;
