import Footer from "@/components/Footer";
import JobsList from "@/components/JobsList";
import Navbar from "@/components/Navbar";

export default async function JobsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-[#f8fafc]"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1224px" }}>
          <div style={{ marginBottom: "40px" }}>
            <h1
              className="font-extrabold leading-tight text-[#0f172a]"
              style={{ fontSize: "48px" }}
            >
              Find Your Dream Job
            </h1>
            <p className="text-xl text-gray-600" style={{ marginTop: "14px" }}>
              Browse latest opportunities from top companies.
            </p>
          </div>
          <JobsList search={params?.search} location={params?.location} />
        </div>
      </main>
      <Footer />
    </>
  );
}
