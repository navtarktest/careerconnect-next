import React from "react";

function Footer() {

  return (

    <footer className="bg-[#0f172a] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-extrabold text-blue-500 mb-5">

              CareerConnect

            </h2>

            <p className="text-gray-400 leading-relaxed">

              Connecting talented professionals with top companies worldwide.

            </p>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-xl font-bold mb-6">

              Company

            </h3>

            <ul className="space-y-4 text-gray-400">

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

            <h3 className="text-xl font-bold mb-6">

              Resources

            </h3>

            <ul className="space-y-4 text-gray-400">

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

            <h3 className="text-xl font-bold mb-6">

              Newsletter

            </h3>

            <p className="text-gray-400 mb-5">

              Subscribe for latest jobs and career updates.

            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black rounded-xl px-5 py-4 outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition">

                Subscribe

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500">

          &copy; 2026 CareerConnect. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;
