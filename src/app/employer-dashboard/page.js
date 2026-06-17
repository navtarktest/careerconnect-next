"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { useJobs } from "@/context/JobsContext";

function EmployerDashboard() {

  const router = useRouter();

  const { loading: authLoading, user, userRole } = useAuth();

  const {
    getEmployerJobs,
    deleteJob,
  } = useJobs();

  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  // FETCH JOBS
  useEffect(() => {

    const fetchJobs = async () => {

      if (authLoading) return;

      if (!user) {

        router.replace("/login");
        return;
      }

      if (userRole !== "employer") {

        router.replace("/dashboard");
        return;
      }

      const data =
        await getEmployerJobs(
          user.uid
        );

      setJobs(data);

      setLoading(false);
    };

    fetchJobs();

  }, [authLoading, getEmployerJobs, router, user, userRole]);

  // HANDLE DELETE
  const handleDelete = async (id) => {

    try {

      await deleteJob(id);

      setJobs(
        jobs.filter(
          (job) => job.id !== id
        )
      );

      toast.success(
        "Job Deleted Successfully!"
      );

    } catch (error) {

      toast.error(error.message);
    }
  };

  if (authLoading || !user || userRole !== "employer") {

    return null;
  }

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <main
        className="cc-page-container mx-auto"
        style={{
          maxWidth: "1224px",
          paddingTop: "82px",
          paddingBottom: "80px",
        }}
      >

        {/* Heading */}
        <div className="cc-page-header" style={{ marginBottom: "50px" }}>

          <h1
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ fontSize: "48px" }}
          >

            Employer Dashboard

          </h1>

          <p
            className="text-gray-500"
            style={{ marginTop: "12px", fontSize: "20px" }}
          >

            Manage your posted jobs.

          </p>

        </div>

        {/* Stats */}
        <div style={{ marginBottom: "56px" }}>

          <div
            className="cc-stat-card bg-white shadow-lg shadow-gray-200/70"
            style={{ width: "384px", borderRadius: "22px", padding: "30px" }}
          >

            <h2 className="text-gray-500" style={{ fontSize: "18px" }}>

              Total Jobs

            </h2>

            <p
              className="font-extrabold text-blue-600"
              style={{ marginTop: "22px", fontSize: "50px", lineHeight: 1 }}
            >

              {jobs.length}

            </p>

          </div>

        </div>

        {/* Loading */}
        {loading ? (

          <div className="text-2xl font-bold text-[#0f172a]">

            Loading...

          </div>

        ) : jobs.length === 0 ? (

          <div
            className="cc-page-card bg-white text-center text-2xl font-bold text-gray-500 shadow-lg shadow-gray-200/70"
            style={{ borderRadius: "22px", padding: "48px" }}
          >

            No Jobs Posted Yet

          </div>

        ) : (

          <div className="grid" style={{ gap: "32px" }}>

            {jobs.map((job) => (

              <div
                key={job.id}
                className="cc-page-card border border-gray-200 bg-white shadow-lg shadow-gray-200/70"
                style={{ borderRadius: "22px", padding: "30px" }}
              >

                <div className="cc-dashboard-job-row flex items-center justify-between gap-8">

                  <div>

                    <h2
                      className="font-bold leading-tight text-[#0f172a]"
                      style={{ marginBottom: "18px", fontSize: "30px" }}
                    >

                      {job.title}

                    </h2>

                    <div className="text-gray-700" style={{ fontSize: "16px" }}>

                      <p style={{ marginBottom: "12px" }}>

                        <span className="font-bold">

                          Company:

                        </span>{" "}

                        {job.company}

                      </p>

                      <p>

                        <span className="font-bold">

                          Location:

                        </span>{" "}

                        {job.location}

                      </p>

                    </div>

                  </div>

                  <div className="cc-dashboard-actions flex items-center" style={{ gap: "16px" }}>
                    <Link
                      href={`/edit-job/${job.id}`}
                      className="flex items-center justify-center font-bold text-white transition"
                      style={{
                        height: "48px",
                        minWidth: "78px",
                        borderRadius: "14px",
                        backgroundColor: "#2563eb",
                      }}
                    >
                      Edit
                    </Link>

                    <Link
                      href={`/job-applicants/${job.id}`}
                      className="flex items-center justify-center font-bold text-white transition"
                      style={{
                        height: "48px",
                        minWidth: "128px",
                        borderRadius: "14px",
                        backgroundColor: "#16a34a",
                        color: "#ffffff",
                      }}
                    >
                      Applicants
                    </Link>

                    <button
                      onClick={() => handleDelete(job.id)}
                      className="flex items-center justify-center font-bold text-white transition"
                      style={{
                        height: "48px",
                        minWidth: "98px",
                        borderRadius: "14px",
                        backgroundColor: "#ef2335",
                      }}
                    >
                      Delete
                    </button>
                  </div>

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

export default EmployerDashboard;
