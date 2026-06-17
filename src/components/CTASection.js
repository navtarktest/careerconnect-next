import React from "react";
import Link from "next/link";

function CTASection() {

  return (

    <section
      className="cc-cta bg-blue-600"
      style={{
        backgroundColor: "#2563eb",
        padding: "105px 0 95px",
      }}
    >

      <div className="cc-home-container mx-auto text-center" style={{ maxWidth: "1232px" }}>

        <h2
          className="font-extrabold text-white leading-tight"
          style={{
            color: "#ffffff",
            fontSize: "60px",
            lineHeight: "1.22",
            fontWeight: 800,
            letterSpacing: "0",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >

          Ready To Take The Next
          <br />
          Step In Your Career?

        </h2>

        <p
          className="text-blue-100 leading-relaxed"
          style={{
            color: "#dbeafe",
            marginTop: "34px",
            fontSize: "22px",
            lineHeight: "1.6",
            whiteSpace: "nowrap",
          }}
        >

          Join thousands of professionals and discover opportunities
          that match your skills and ambitions.

        </p>

        <div
          className="cc-cta-actions flex items-center justify-center"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "38px",
            gap: "20px",
          }}
        >

          <Link
            href="/register"
            className="inline-flex items-center justify-center bg-white text-blue-600 hover:bg-gray-100 font-bold transition"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              color: "#2563eb",
              height: "61px",
              width: "160px",
              borderRadius: "16px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >

            Get Started

          </Link>

          <Link
            href="/jobs"
            className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-blue-600 font-bold transition"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ffffff",
              border: "0",
              color: "#2563eb",
              height: "61px",
              width: "172px",
              borderRadius: "16px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >

            Browse Jobs

          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTASection;
