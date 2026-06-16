"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Hero() {

  const [search, setSearch] =
  useState("");
  const [location, setLocation] =
  useState("");

const router = useRouter();

// HANDLE SEARCH
const handleSearch = () => {
  const params = new URLSearchParams();

  if (search.trim()) {
    params.set("search", search.trim());
  }

  if (location.trim()) {
    params.set("location", location.trim());
  }

  const queryString = params.toString();

  router.push(queryString ? `/jobs?${queryString}` : "/jobs");
};

  return (

    <section className="bg-[#f8fafc] min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          <p className="text-blue-600 font-semibold mb-5 text-lg">
            #1 Job Portal Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-[#0f172a]">

            Find Your
            <span className="text-blue-600">
              {" "}Dream Job
            </span>
            <br />
            {" "}
            Today

          </h1>

          <p className="mt-8 text-gray-600 text-xl leading-relaxed">

            Connect with top companies and discover opportunities
            that match your skills, passion, and career goals.

          </p>

          {/* Search Box */}
<div className="mt-10 bg-white shadow-2xl rounded-3xl p-4 flex flex-col md:flex-row items-center gap-4 max-w-3xl">

  {/* Search Input */}
  <input
    type="text"
    placeholder="Job title or keyword"
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="flex-1 w-full border border-gray-200 rounded-2xl px-5 h-16 outline-none focus:border-blue-500 text-lg"
  />

  {/* Location Input */}
  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
    className="flex-1 w-full border border-gray-200 rounded-2xl px-5 h-16 outline-none focus:border-blue-500 text-lg"
  />

  {/* Search Button */}
  <button
    onClick={handleSearch}
    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 h-16 rounded-2xl font-bold text-lg transition"
  >

    Search Jobs

  </button>

</div>

        </div>

        {/* RIGHT */}
        <div className="hidden md:flex justify-center">

          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Career"
            width={640}
            height={600}
            priority
            className="rounded-3xl shadow-2xl w-full max-w-xl h-[600px] object-cover"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
