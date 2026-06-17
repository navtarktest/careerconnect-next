import React from "react";

function Footer() {

  return (

    <footer
      className="cc-footer bg-[#0f172a] text-white"
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        paddingTop: "86px",
        paddingBottom: "44px",
      }}
    >

      <div className="cc-footer-container mx-auto px-6" style={{ maxWidth: "1232px" }}>

        <div
          className="cc-footer-grid grid md:grid-cols-4 gap-12"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            columnGap: "78px",
          }}
        >

          {/* Logo */}
          <div>

            <h2
              className="text-3xl font-extrabold text-blue-500 mb-5"
              style={{
                color: "#3b82f6",
                fontSize: "30px",
                lineHeight: "36px",
                fontWeight: 800,
                marginBottom: "24px",
              }}
            >

              CareerConnect

            </h2>

            <p
              className="text-gray-400 leading-relaxed"
              style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "28px" }}
            >

              Connecting talented professionals with top companies worldwide.

            </p>

          </div>

          {/* Company */}
          <div>

            <h3
              className="text-xl font-bold mb-6"
              style={{
                color: "#ffffff",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: 800,
                marginBottom: "28px",
              }}
            >

              Company

            </h3>

            <ul
              className="space-y-4 text-gray-400"
              style={{
                color: "#cbd5e1",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                fontSize: "16px",
              }}
            >

              <li className="hover:text-white cursor-pointer transition">

                About

              </li>

              <li className="hover:text-white cursor-pointer transition">

                Careers

              </li>

              <li className="hover:text-white cursor-pointer transition">

                Blog

              </li>

              <li className="hover:text-white cursor-pointer transition">

                Contact

              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3
              className="text-xl font-bold mb-6"
              style={{
                color: "#ffffff",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: 800,
                marginBottom: "28px",
              }}
            >

              Resources

            </h3>

            <ul
              className="space-y-4 text-gray-400"
              style={{
                color: "#cbd5e1",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                fontSize: "16px",
              }}
            >

              <li className="hover:text-white cursor-pointer transition">

                Help Center

              </li>

              <li className="hover:text-white cursor-pointer transition">

                Privacy Policy

              </li>

              <li className="hover:text-white cursor-pointer transition">

                Terms & Conditions

              </li>

              <li className="hover:text-white cursor-pointer transition">

                FAQs

              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3
              className="text-xl font-bold mb-6"
              style={{
                color: "#ffffff",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: 800,
                marginBottom: "28px",
              }}
            >

              Newsletter

            </h3>

            <p
              className="text-gray-400 mb-5"
              style={{
                color: "#cbd5e1",
                fontSize: "16px",
                lineHeight: "26px",
                marginBottom: "24px",
              }}
            >

              Subscribe for latest jobs and career updates.

            </p>

            <div
              className="flex flex-col gap-4"
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black rounded-xl px-5 py-4 outline-none"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#111827",
                  width: "272px",
                  height: "56px",
                  borderRadius: "10px",
                  padding: "0 20px",
                  outline: "none",
                }}
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
                style={{
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  width: "272px",
                  height: "56px",
                  borderRadius: "10px",
                  fontWeight: 700,
                }}
              >

                Subscribe

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500"
          style={{
            borderTop: "1px solid #334155",
            marginTop: "70px",
            paddingTop: "34px",
            color: "#64748b",
            textAlign: "center",
          }}
        >

          &copy; 2026 CareerConnect. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
