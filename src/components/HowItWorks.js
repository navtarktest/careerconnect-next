import React from "react";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up and build your professional profile in minutes.",
    icon: "\u{1F464}",
  },
  {
    id: 2,
    title: "Search Jobs",
    description: "Browse thousands of opportunities from top companies.",
    icon: "\u{1F50D}",
  },
  {
    id: 3,
    title: "Apply Easily",
    description: "Submit applications quickly and track your career growth.",
    icon: "\u{1F680}",
  },
];

function HowItWorks() {
  return (
    <section className="cc-home-section bg-white" style={{ backgroundColor: "#ffffff", padding: "104px 0 96px" }}>
      <div className="cc-home-container mx-auto" style={{ maxWidth: "1232px" }}>
        <div className="cc-section-header text-center" style={{ marginBottom: "78px" }}>
          <p
            className="font-semibold text-blue-600"
            style={{ color: "#2563eb", marginBottom: "22px", fontSize: "18px", fontWeight: 600 }}
          >
            Easy Process
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ color: "#0f172a", fontSize: "48px", lineHeight: "1.15", fontWeight: 800 }}
          >
            How CareerConnect Works
          </h2>
          <p
            className="mx-auto text-gray-600"
            style={{ color: "#334155", marginTop: "24px", maxWidth: "900px", fontSize: "20px", lineHeight: "32px" }}
          >
            Get started with your career journey in just a few simple steps.
          </p>
        </div>

        <div
          className="cc-card-grid grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "32px" }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="cc-home-card relative border border-gray-200 bg-[#f8fafc] text-center transition hover:shadow-xl"
              style={{
                position: "relative",
                backgroundColor: "#f8fafc",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                minHeight: "289px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div
                className="absolute flex items-center justify-center bg-blue-600 font-bold text-white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  top: "22px",
                  right: "22px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "999px",
                  fontSize: "18px",
                  fontWeight: 800,
                }}
              >
                {step.id}
              </div>
              <div style={{ fontSize: "66px", lineHeight: "72px", marginBottom: "28px" }}>
                {step.icon}
              </div>
              <h3
                className="font-bold text-[#0f172a]"
                style={{ color: "#0f172a", fontSize: "30px", lineHeight: "36px", fontWeight: 800, marginBottom: "22px" }}
              >
                {step.title}
              </h3>
              <p className="text-gray-600" style={{ color: "#334155", fontSize: "18px", lineHeight: "28px" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
