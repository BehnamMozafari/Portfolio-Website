import Image from "next/image";
import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import EmailSection from "./components/EmailSection.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <head>
        <title>Behnam Mozafari</title>
        <link rel="icon" href="/BM.svg" />
      </head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div class="container mt-24 mx-auto px-12 py-4" id="home">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
