import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedJobs from "@/components/FeaturedJobs";
import PopularCategories from "@/components/PopularCategories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
