"use client";

import React from "react";
import Link from "next/link";
import { useJobs } from "@/context/JobsContext";

function FeaturedJobs() {
  const { jobs, loading } = useJobs();
  const featuredJobs = jobs.slice(0, 3);

  return (
    <section
      className="cc-home-section bg-[#f8fafc]"
      style={{ backgroundColor: "#f8fafc", padding: "104px 0 96px" }}
    >
      <div className="cc-home-container mx-auto" style={{ maxWidth: "1232px" }}>
        <div className="cc-section-header text-center" style={{ marginBottom: "60px" }}>
          <h2
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ color: "#0f172a", fontSize: "48px", lineHeight: "1.15", fontWeight: 800 }}
          >
            Featured Jobs
          </h2>
          <p
            className="text-gray-500"
            style={{ color: "#64748b", marginTop: "24px", fontSize: "20px", lineHeight: "32px" }}
          >
            Discover latest opportunities from top companies.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-xl font-bold text-gray-500">
            Loading featured jobs...
          </div>
        ) : featuredJobs.length === 0 ? (
          <div className="text-center text-xl font-bold text-gray-500">
            No featured jobs available.
          </div>
        ) : (
          <div
            className="cc-card-grid grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "32px" }}
          >
            {featuredJobs.map((job) => (
              <article
                key={job.id}
                className="cc-home-card border border-gray-200 bg-white shadow-lg shadow-gray-200/60 transition hover:shadow-xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "20px",
                  minHeight: "274px",
                  padding: "40px",
                }}
              >
                <h3
                  className="font-bold text-[#0f172a]"
                  style={{ color: "#0f172a", fontSize: "26px", lineHeight: "32px", fontWeight: 800, marginBottom: "18px" }}
                >
                  {job.title}
                </h3>
                <div className="text-gray-600" style={{ color: "#334155", fontSize: "16px", lineHeight: "32px" }}>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <p>{job.salary}</p>
                </div>
                <Link
                  href={`/job/${job.id}`}
                  className="inline-flex items-center justify-center bg-blue-600 font-bold text-white transition hover:bg-blue-700"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    marginTop: "24px",
                    height: "48px",
                    width: "140px",
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 800,
                  }}
                >
                  View Details
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedJobs;
