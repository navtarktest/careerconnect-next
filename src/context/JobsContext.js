"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

const JobsContext = createContext();

export const useJobs = () =>
  useContext(JobsContext);

function JobsProvider({ children }) {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH JOBS
  const fetchJobs = async () => {

    try {

      const querySnapshot =
        await getDocs(
          collection(db, "jobs")
        );

      const jobsData = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setJobs(jobsData);

    } catch (error) {

      console.log(error);
    } finally {

      setLoading(false);
    }
  };

  // ADD JOB
const addJob = async (jobData) => {

  try {

    await addDoc(
      collection(db, "jobs"),
      jobData
    );

    // REFRESH JOBS
    await fetchJobs();

  } catch (error) {

    console.log(error);
  }
};

// APPLY JOB
const applyJob = async (applicationData) => {

  try {

    await addDoc(
      collection(db, "applications"),
      applicationData
    );

  } catch (error) {

    console.log(error);
  }
};

// GET USER APPLICATIONS
const getUserApplications = async (email) => {

  try {

    const q = query(
      collection(db, "applications"),
      where("userEmail", "==", email)
    );

    const querySnapshot = await getDocs(q);

    const applications = querySnapshot.docs.map(
      (doc) => ({
        id: doc.id,
        ...doc.data(),
      })
    );

    return applications;

  } catch (error) {

    console.log(error);

    return [];
  }
};

// GET EMPLOYER JOBS
const getEmployerJobs = async (uid) => {

  try {

    const q = query(
      collection(db, "jobs"),
      where("postedBy", "==", uid)
    );

    const querySnapshot =
      await getDocs(q);

    const jobsData =
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    return jobsData;

  } catch (error) {

    console.log(error);

    return [];
  }
};

// DELETE JOB
const deleteJob = async (id) => {

  try {

    await deleteDoc(
      doc(db, "jobs", id)
    );

    await fetchJobs();

  } catch (error) {

    console.log(error);
  }
};

// UPDATE JOB
const updateJob = async (
  id,
  updatedData
) => {

  try {

    const jobRef =
      doc(db, "jobs", id);

    await updateDoc(
      jobRef,
      updatedData
    );

    await fetchJobs();

  } catch (error) {

    console.log(error);
  }
};

// GET JOB APPLICANTS
const getJobApplicants = async (
  jobId
) => {

  try {

    const q = query(
      collection(db, "applications"),
      where("jobId", "==", jobId)
    );

    const querySnapshot =
      await getDocs(q);

    const applicants =
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    return applicants;

  } catch (error) {

    console.log(error);

    return [];
  }
};

  // LOAD JOBS
  useEffect(() => {

    const timeoutId = window.setTimeout(() => {

      fetchJobs();

    }, 0);

    return () => window.clearTimeout(timeoutId);

  }, []);

  return (

    <JobsContext.Provider
      value={{
        jobs, addJob, applyJob, getUserApplications, getEmployerJobs, deleteJob, updateJob, getJobApplicants,
        loading,
      }}
    >

      {children}

    </JobsContext.Provider>
  );
}

export default JobsProvider;
