"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

function Dashboard() {

  const router = useRouter();
  const { loading, user } = useAuth();

  useEffect(() => {

    if (!loading && !user) {

      router.replace("/login");
    }

  }, [loading, router, user]);

  if (loading || !user) {

    return null;
  }

  return (

    <div className="bg-[#f8fafc] min-h-screen">

      <Navbar />

      <div className="cc-page-container max-w-5xl mx-auto px-6 py-20">

        <div className="cc-page-card bg-white rounded-3xl shadow-xl p-12 border border-gray-200">

          <h1 className="text-5xl font-extrabold text-[#0f172a] mb-8">

            Dashboard

          </h1>

          <div className="space-y-6 text-xl text-gray-600">

            <p>

              Welcome back 👋

            </p>

            <p>

              Logged in as:

              <span className="font-bold text-blue-600 ml-3">

                {user?.email}

              </span>

            </p>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;
