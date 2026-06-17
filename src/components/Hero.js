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

    <section
      className="cc-hero bg-[#f8fafc]"
      style={{ backgroundColor: "#f8fafc", paddingTop: "116px", paddingBottom: "132px" }}
    >

      <div
        className="cc-hero-grid mx-auto grid items-center"
        style={{
          maxWidth: "1232px",
          gridTemplateColumns: "560px 576px",
          gap: "96px",
        }}
      >

        {/* LEFT */}
        <div className="cc-hero-copy">

          <p
            className="font-semibold text-blue-600"
            style={{
              color: "#2563eb",
              marginBottom: "34px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            #1 Job Portal Platform
          </p>

          <h1
            className="font-extrabold text-[#0f172a]"
            style={{
              color: "#0f172a",
              fontSize: "72px",
              lineHeight: "1.25",
              fontWeight: 800,
              letterSpacing: "0",
            }}
          >

            Find Your
            <span className="text-blue-600">
              {" "}Dream Job
            </span>
            <br />
            {" "}
            Today

          </h1>

          <p
            className="text-gray-600"
            style={{
              color: "#334155",
              marginTop: "36px",
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >

            Connect with top companies and discover opportunities
            that match your skills, passion, and career goals.

          </p>

          {/* Search Box */}
<div
  className="cc-hero-search flex items-center bg-white shadow-2xl shadow-gray-200/80"
  style={{
    display: "flex",
    alignItems: "center",
    marginTop: "44px",
    width: "584px",
    gap: "16px",
    padding: "16px",
    borderRadius: "20px",
  }}
>

  {/* Search Input */}
  <input
    type="text"
    placeholder="Job title or keyword"
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="border border-gray-200 px-4 outline-none transition focus:border-blue-500"
    data-responsive-input="true"
    style={{
      width: "170px",
      height: "64px",
      borderRadius: "14px",
      fontSize: "18px",
      padding: "0 22px",
    }}
  />

  {/* Location Input */}
  <input
    type="text"
    placeholder="Location"
    value={location}
    onChange={(e) =>
      setLocation(e.target.value)
    }
    className="border border-gray-200 px-4 outline-none transition focus:border-blue-500"
    data-responsive-input="true"
    style={{
      width: "170px",
      height: "64px",
      borderRadius: "14px",
      fontSize: "18px",
      padding: "0 22px",
    }}
  />

  {/* Search Button */}
  <button
    onClick={handleSearch}
    className="bg-blue-600 font-bold text-white transition hover:bg-blue-700"
    data-responsive-button="true"
    style={{
      backgroundColor: "#2563eb",
      color: "#ffffff",
      width: "180px",
      height: "64px",
      borderRadius: "14px",
      fontSize: "18px",
      fontWeight: 800,
    }}
  >

    Search Jobs

  </button>

</div>

        </div>

        {/* RIGHT */}
        <div className="cc-hero-media hidden md:flex justify-center">

          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Career"
            width={640}
            height={600}
            priority
            className="object-cover shadow-2xl shadow-gray-300/80"
            style={{ width: "576px", height: "600px", borderRadius: "20px", objectFit: "cover" }}
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
