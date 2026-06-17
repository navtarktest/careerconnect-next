"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function Applications() {
  const router = useRouter();
  const { loading: authLoading, user } = useAuth();
  const { getUserApplications } = useJobs();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      if (authLoading) return;

      if (!user) {
        router.replace("/login");
        return;
      }

      const data = await getUserApplications(user.email);

      setApplications(data);
      setLoading(false);
    };

    fetchApplications();
  }, [authLoading, getUserApplications, router, user]);

  if (authLoading || !user) {
    return null;
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <Navbar />

      <main
        className="cc-page-container mx-auto"
        style={{
          maxWidth: "920px",
          paddingTop: "72px",
          paddingBottom: "80px",
        }}
      >
        <div className="cc-page-header" style={{ marginBottom: "42px" }}>
          <h1
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ fontSize: "48px" }}
          >
            My Applications
          </h1>
          <p
            className="text-gray-500"
            style={{ marginTop: "12px", fontSize: "18px" }}
          >
            Track all jobs you applied for.
          </p>
        </div>

        {loading ? (
          <div className="text-2xl font-bold text-[#0f172a]">Loading...</div>
        ) : applications.length === 0 ? (
          <div
            className="cc-page-card border border-gray-200 bg-white text-center text-2xl font-bold text-gray-500 shadow-lg shadow-gray-200/70"
            style={{ borderRadius: "22px", padding: "48px" }}
          >
            No Applications Found
          </div>
        ) : (
          <div className="grid" style={{ gap: "32px" }}>
            {applications.map((application) => (
              <div
                key={application.id}
                className="cc-page-card border border-gray-200 bg-white shadow-lg shadow-gray-200/70"
                style={{ borderRadius: "22px", padding: "30px" }}
              >
                <h2
                  className="font-bold leading-tight text-[#0f172a]"
                  style={{ fontSize: "30px", marginBottom: "18px" }}
                >
                  {application.jobTitle}
                </h2>

                <div className="text-gray-700" style={{ fontSize: "18px" }}>
                  <p style={{ marginBottom: "14px" }}>
                    <span className="font-bold">Company:</span>{" "}
                    {application.company}
                  </p>
                  <p style={{ marginBottom: "14px" }}>
                    <span className="font-bold">Applied By:</span>{" "}
                    {application.userEmail}
                  </p>
                  <p>
                    <span className="font-bold">Applied At:</span>{" "}
                    {new Date(application.appliedAt).toLocaleString("en-GB")}
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

export default Applications;
