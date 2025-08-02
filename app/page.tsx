import Courses from "@/components/organisms/courses/Courses";
import Footer from "@/components/organisms/footer/Footer";
import Hero from "@/components/organisms/hero/Hero";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Footer />
    </>
  );
}
