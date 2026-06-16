"use client";

import { useMemo, useState } from "react";
import JobCard from "@/components/JobCard";
import { useJobs } from "@/context/JobsContext";

export default function JobsList({ search = "", location = "" }) {
  const { jobs, loading } = useJobs();
  const [searchTerm, setSearchTerm] = useState(search);
  const [locationTerm, setLocationTerm] = useState(location);
  const [jobType, setJobType] = useState("All Types");

  const jobTypes = useMemo(() => {
    const uniqueTypes = jobs
      .map((job) => job.type)
      .filter(Boolean)
      .filter((type, index, list) => list.indexOf(type) === index);

    return ["All Types", ...uniqueTypes];
  }, [jobs]);

  const filteredJobs = jobs.filter((job) => {
    const searchValue = searchTerm.trim().toLowerCase();
    const locationValue = locationTerm.trim().toLowerCase();

    const matchesSearch =
      !searchValue ||
      job.title?.toLowerCase().includes(searchValue) ||
      job.company?.toLowerCase().includes(searchValue) ||
      job.description?.toLowerCase().includes(searchValue);

    const matchesLocation =
      !locationValue || job.location?.toLowerCase().includes(locationValue);

    const matchesType = jobType === "All Types" || job.type === jobType;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <section>
      <div
        className="bg-white shadow-xl shadow-gray-200/80 ring-1 ring-gray-100"
        style={{ marginBottom: "55px", borderRadius: "22px", padding: "24px" }}
      >
        <div
          className="grid"
          style={{ gap: "20px", gridTemplateColumns: "1fr 1fr 1fr 280px" }}
        >
          <input
            type="text"
            placeholder="Search jobs or companies..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full border border-gray-200 px-5 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
            style={{ height: "58px", borderRadius: "14px", fontSize: "15px" }}
          />

          <input
            type="text"
            placeholder="Location"
            value={locationTerm}
            onChange={(event) => setLocationTerm(event.target.value)}
            className="w-full border border-gray-200 px-5 text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-blue-500"
            style={{ height: "58px", borderRadius: "14px", fontSize: "15px" }}
          />

          <select
            value={jobType}
            onChange={(event) => setJobType(event.target.value)}
            className="w-full border border-gray-200 px-5 text-black outline-none transition focus:border-blue-500"
            style={{ height: "58px", borderRadius: "14px", fontSize: "15px" }}
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <div
            className="flex items-center justify-center bg-blue-600 px-5 text-lg font-bold text-white"
            style={{ height: "58px", borderRadius: "14px" }}
          >
            {loading
              ? "Loading Jobs"
              : `${filteredJobs.length} ${
                  filteredJobs.length === 1 ? "Job" : "Jobs"
                } Found`}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="rounded-3xl bg-white p-12 text-center text-2xl font-bold text-gray-500 shadow-sm">
          Loading jobs...
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="rounded-3xl bg-white p-12 text-center text-2xl font-bold text-gray-500 shadow-sm">
          No jobs found.
        </div>
      ) : (
        <div
          className="grid"
          style={{ gap: "32px", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
        >
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
}
