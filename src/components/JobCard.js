import React from "react";
import Link from "next/link";

function JobCard({ job }) {

  return (

    <div
      className="cc-job-card flex flex-col border border-gray-200 bg-white transition duration-300 hover:shadow-2xl"
      style={{ minHeight: "384px", borderRadius: "22px", padding: "32px" }}
    >

      {/* Top */}
      <div className="mb-6 flex items-start justify-between gap-4">

        <div>

          <h2
            className="font-bold leading-tight text-[#020817]"
            style={{ fontSize: "25px" }}
          >

            {job.title}

          </h2>

          <p className="mt-2 text-gray-500" style={{ fontSize: "15px" }}>

            {job.company}

          </p>

        </div>

        <div
          className="bg-blue-100 text-sm font-semibold text-blue-600"
          style={{ borderRadius: "10px", padding: "8px 16px" }}
        >

          {job.type}

        </div>

      </div>

      {/* Info */}
      <div className="mb-6 space-y-3 text-gray-700" style={{ fontSize: "16px" }}>

        <p>
          📍 {job.location}
        </p>

        <p>
          💰 {job.salary}
        </p>

      </div>

      {/* Description */}
      <p className="mb-8 leading-relaxed text-gray-700" style={{ fontSize: "16px" }}>

        {job.description}

      </p>

      {/* Button */}
      <Link
        href={`/job/${job.id}`}
        className="mt-auto flex items-center justify-center bg-blue-600 text-center font-semibold text-white transition hover:bg-blue-700"
        style={{ borderRadius: "14px", height: "56px" }}
      >

        View Details

      </Link>

    </div>
  );
}

export default JobCard;
