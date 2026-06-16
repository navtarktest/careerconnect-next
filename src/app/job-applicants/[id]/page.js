"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function JobApplicants() {
  const router = useRouter();
  const { id } = useParams();
  const { loading: authLoading, user, userRole } = useAuth();
  const { getJobApplicants } = useJobs();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      if (authLoading) return;

      if (!user) {
        router.replace("/login");
        return;
      }

      if (userRole !== "employer") {
        router.replace("/dashboard");
        return;
      }

      const data = await getJobApplicants(id);

      setApplicants(data);
      setLoading(false);
    };

    fetchApplicants();
  }, [authLoading, getJobApplicants, id, router, user, userRole]);

  if (authLoading || !user || userRole !== "employer") {
    return null;
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      <main
        className="mx-auto"
        style={{
          maxWidth: "920px",
          paddingTop: "72px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ marginBottom: "42px" }}>
          <h1
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ fontSize: "48px" }}
          >
            Job Applicants
          </h1>
          <p
            className="text-gray-500"
            style={{ marginTop: "12px", fontSize: "18px" }}
          >
            View all candidates applied for this job.
          </p>
        </div>

        {loading ? (
          <div className="text-2xl font-bold text-[#0f172a]">Loading...</div>
        ) : applicants.length === 0 ? (
          <div
            className="border border-gray-200 bg-white text-center text-2xl font-bold text-gray-500 shadow-lg shadow-gray-200/70"
            style={{ borderRadius: "22px", padding: "48px" }}
          >
            No Applicants Yet
          </div>
        ) : (
          <div className="grid" style={{ gap: "32px" }}>
            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                className="border border-gray-200 bg-white shadow-lg shadow-gray-200/70"
                style={{ borderRadius: "22px", padding: "30px" }}
              >
                <h2
                  className="font-bold leading-tight text-[#0f172a]"
                  style={{ fontSize: "30px", marginBottom: "22px" }}
                >
                  {applicant.jobTitle}
                </h2>

                <div className="text-gray-700" style={{ fontSize: "18px" }}>
                  <p style={{ marginBottom: "14px" }}>
                    <span className="font-bold">Applicant Email:</span>{" "}
                    {applicant.userEmail}
                  </p>
                  <p style={{ marginBottom: "14px" }}>
                    <span className="font-bold">Company:</span>{" "}
                    {applicant.company}
                  </p>
                  <p>
                    <span className="font-bold">Applied At:</span>{" "}
                    {new Date(applicant.appliedAt).toLocaleString("en-GB")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default JobApplicants;
