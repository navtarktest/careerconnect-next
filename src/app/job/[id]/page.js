"use client";

import React from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function JobDetails() {
  const { id } = useParams();
  const { jobs, loading, applyJob } = useJobs();
  const { user } = useAuth();
  const job = jobs.find((item) => item.id === id);

  const handleApply = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      await applyJob({
        userId: user.uid,
        userEmail: user.email,
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        appliedAt: new Date().toISOString(),
      });

      toast.success("Application Submitted!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#f8fafc] min-h-screen">
        <Navbar />
        <main
          className="flex items-center justify-center"
          style={{ minHeight: "620px" }}
        >
          <div className="text-3xl font-bold text-[#0f172a]">Loading...</div>
        </main>
        <Footer />
      </div>
    );
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
        className="mx-auto flex justify-center"
        style={{
          maxWidth: "1224px",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <article
          className="border border-gray-200 bg-white shadow-xl shadow-gray-200/80"
          style={{
            width: "860px",
            borderRadius: "22px",
            padding: "42px",
          }}
        >
          <h1
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ fontSize: "48px", marginBottom: "24px" }}
          >
            {job.title}
          </h1>

          <div
            className="space-y-3 text-gray-700"
            style={{ fontSize: "18px", marginBottom: "42px" }}
          >
            <p style={{ marginBottom: "14px" }}>
              <span className="font-bold">Company:</span> {job.company}
            </p>
            <p style={{ marginBottom: "14px" }}>
              <span className="font-bold">Location:</span> {job.location}
            </p>
            <p style={{ marginBottom: "14px" }}>
              <span className="font-bold">Salary:</span> {job.salary}
            </p>
            <p>
              <span className="font-bold">Type:</span> {job.type}
            </p>
          </div>

          <section style={{ marginBottom: "46px" }}>
            <h2
              className="font-bold text-black"
              style={{ fontSize: "30px", marginBottom: "24px" }}
            >
              Job Description
            </h2>
            <p
              className="text-gray-700"
              style={{ fontSize: "18px", lineHeight: "32px" }}
            >
              {job.description}
            </p>
          </section>

          <button
            onClick={handleApply}
            className="w-full bg-blue-600 text-xl font-bold text-white transition hover:bg-blue-700"
            style={{ height: "68px", borderRadius: "14px" }}
          >
            Apply Now
          </button>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default JobDetails;
