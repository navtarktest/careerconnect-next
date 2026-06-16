"use client";

import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContext";
import JobsProvider from "@/context/JobsContext";

export default function AppProviders({ children }) {
  return (
    <AuthProvider>
      <JobsProvider>
        {children}
        <Toaster position="top-right" />
      </JobsProvider>
    </AuthProvider>
  );
}
