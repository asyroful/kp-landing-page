import { Helmet } from "react-helmet-async";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import ServiceSection from "./home/ServiceSection";
import ProjectSection from "./home/ProjectSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Kevin Portfolio</title>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </>
  );
}
