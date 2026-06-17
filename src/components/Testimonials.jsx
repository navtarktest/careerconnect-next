import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "CareerConnect helped me land my dream frontend developer role within just two weeks. The platform is smooth and easy to use.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "I found amazing remote opportunities through CareerConnect. The application process was simple and professional.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The best job portal experience I've had. Clean interface, quality jobs, and fast application tracking.",
  },
];

function Testimonials() {
  return (
    <section
      className="cc-home-section bg-[#f8fafc]"
      style={{ backgroundColor: "#f8fafc", padding: "104px 0 96px" }}
    >
      <div
        className="cc-home-container mx-auto"
        style={{ maxWidth: "1232px", paddingLeft: "0", paddingRight: "0" }}
      >
        <div className="cc-section-header text-center" style={{ marginBottom: "78px" }}>
          <p
            className="text-blue-600 font-semibold"
            style={{
              color: "#2563eb",
              marginBottom: "22px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            Testimonials
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{
              color: "#0f172a",
              fontSize: "48px",
              lineHeight: "1.15",
              fontWeight: 800,
              letterSpacing: "0",
            }}
          >
            What Our Users Say
          </h2>
          <p
            className="mx-auto text-gray-600"
            style={{
              color: "#334155",
              marginTop: "28px",
              maxWidth: "900px",
              fontSize: "20px",
              lineHeight: "32px",
            }}
          >
            Thousands of professionals trust CareerConnect to grow their
            careers.
          </p>
        </div>

        <div
          className="cc-card-grid grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "32px",
          }}
        >
          {testimonials.map((user) => (
            <div
              key={user.id}
              className="cc-home-card bg-white border border-gray-200 transition duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                minHeight: "294px",
                padding: "40px",
              }}
            >
              <div
                className="flex items-center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "22px",
                  marginBottom: "32px",
                }}
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                  style={{
                    borderRadius: "999px",
                    width: "64px",
                    height: "64px",
                    objectFit: "cover",
                  }}
                />

                <div>
                  <h3
                    className="text-xl font-bold text-[#0f172a]"
                    style={{
                      color: "#0f172a",
                      fontSize: "22px",
                      lineHeight: "28px",
                      fontWeight: 800,
                    }}
                  >
                    {user.name}
                  </h3>
                  <p
                    className="text-gray-500"
                    style={{
                      color: "#475569",
                      marginTop: "4px",
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    {user.role}
                  </p>
                </div>
              </div>

              <p
                className="text-gray-600"
                style={{ color: "#334155", fontSize: "18px", lineHeight: "28px" }}
              >
                {`"${user.review}"`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
