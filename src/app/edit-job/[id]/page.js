"use client";

import React, { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function EditJob() {
  const router = useRouter();
  const { id } = useParams();
  const { loading: authLoading, user, userRole } = useAuth();
  const { jobs, loading: jobsLoading, updateJob } = useJobs();

  const job = jobs.find((item) => item.id === id);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const updatedJob = {
      title: data.get("title"),
      company: data.get("company"),
      location: data.get("location"),
      salary: data.get("salary"),
      type: data.get("type"),
      description: data.get("description"),
    };

    try {
      await updateJob(id, updatedJob);
      toast.success("Job Updated Successfully!");
      router.push("/employer-dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (authLoading || !user || userRole !== "employer" || jobsLoading) {
    return null;
  }

  if (!job) {
    return (
      <div className="bg-[#f8fafc] min-h-screen">
        <Navbar />
        <main
          className="flex items-center justify-center"
          style={{ minHeight: "620px" }}
        >
          <div className="text-3xl font-bold text-[#0f172a]">
            Job Not Found
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      <main
        className="mx-auto"
        style={{
          maxWidth: "760px",
          paddingTop: "72px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="border border-gray-200 bg-white shadow-xl shadow-gray-200/80"
          style={{ borderRadius: "22px", padding: "36px" }}
        >
          <div style={{ marginBottom: "38px" }}>
            <h1
              className="font-extrabold leading-tight text-[#0f172a]"
              style={{ fontSize: "44px" }}
            >
              Edit Job
            </h1>
            <p
              className="text-gray-500"
              style={{ marginTop: "12px", fontSize: "17px" }}
            >
              Update your job details.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              defaultValue={job.title || ""}
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              defaultValue={job.company || ""}
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="location"
              placeholder="Location"
              defaultValue={job.location || ""}
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <input
              type="text"
              name="salary"
              placeholder="Salary"
              defaultValue={job.salary || ""}
              className="w-full border border-gray-200 px-5 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            />

            <select
              name="type"
              defaultValue={job.type || "Full Time"}
              className="w-full border border-gray-200 px-5 outline-none transition focus:border-blue-500"
              style={{ height: "52px", borderRadius: "14px", marginBottom: "22px" }}
            >
              <option value="Full Time">Full Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <textarea
              rows="6"
              name="description"
              placeholder="Description"
              defaultValue={job.description || ""}
              className="w-full border border-gray-200 px-5 py-4 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
              style={{
                minHeight: "160px",
                borderRadius: "14px",
                marginBottom: "26px",
                resize: "vertical",
              }}
            />

            <button
              className="w-full bg-blue-600 font-bold text-white transition hover:bg-blue-700"
              style={{ height: "60px", borderRadius: "14px", fontSize: "18px" }}
            >
              Update Job
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default EditJob;
