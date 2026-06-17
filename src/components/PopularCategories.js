import React from "react";

const categories = [
  { id: 1, title: "Frontend Development", jobs: "120+ Jobs", icon: "\u{1F4BB}" },
  { id: 2, title: "Backend Development", jobs: "85+ Jobs", icon: "\u{1F6E0}\uFE0F" },
  { id: 3, title: "UI/UX Design", jobs: "60+ Jobs", icon: "\u{1F3A8}" },
  { id: 4, title: "Digital Marketing", jobs: "90+ Jobs", icon: "\u{1F4C8}" },
  { id: 5, title: "Data Science", jobs: "70+ Jobs", icon: "\u{1F4CA}" },
  { id: 6, title: "Mobile Development", jobs: "50+ Jobs", icon: "\u{1F4F1}" },
];

function PopularCategories() {
  return (
    <section
      className="cc-home-section bg-[#f8fafc]"
      style={{ backgroundColor: "#f8fafc", padding: "104px 0 120px" }}
    >
      <div className="cc-home-container mx-auto" style={{ maxWidth: "1232px" }}>
        <div className="cc-section-header text-center" style={{ marginBottom: "72px" }}>
          <p
            className="font-semibold text-blue-600"
            style={{ color: "#2563eb", marginBottom: "22px", fontSize: "18px", fontWeight: 600 }}
          >
            Explore Categories
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0f172a]"
            style={{ color: "#0f172a", fontSize: "48px", lineHeight: "1.15", fontWeight: 800 }}
          >
            Popular Job Categories
          </h2>
          <p
            className="mx-auto text-gray-600"
            style={{ color: "#334155", marginTop: "24px", maxWidth: "900px", fontSize: "20px", lineHeight: "32px" }}
          >
            Find jobs based on your skills and interests across multiple
            industries.
          </p>
        </div>

        <div
          className="cc-card-grid grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "32px" }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="cc-home-card border border-gray-200 bg-white transition hover:shadow-xl"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                minHeight: "225px",
                padding: "40px",
              }}
            >
              <div style={{ fontSize: "52px", lineHeight: "56px", marginBottom: "28px" }}>
                {category.icon}
              </div>
              <h3
                className="font-bold text-[#0f172a]"
                style={{ color: "#0f172a", fontSize: "26px", lineHeight: "32px", fontWeight: 800, marginBottom: "18px" }}
              >
                {category.title}
              </h3>
              <p className="text-gray-500" style={{ color: "#475569", fontSize: "18px", lineHeight: "28px" }}>
                {category.jobs}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;
