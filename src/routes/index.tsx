import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/home/HeroSection";
import { ShowreelSection, VideoGallerySection } from "@/components/home/VideoSections";
import {
  DisciplinesSection,
  LeadershipSection,
  ProjectsSection,
  RegisteredSection,
  ServicesSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
  UpdatesSection,
} from "@/components/home/Sections";

const title = "Abbu Turab | Architecture, Construction & Renovation in Lahore";
const description =
  "Government-registered architecture, construction and renovation firm in Lahore. Approved for DHA, Bahria Town, Lake City and all private societies. 12+ years, 300+ projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowreelSection />
      <StatsSection />
      <ProjectsSection />
      <DisciplinesSection />
      <RegisteredSection />
      <VideoGallerySection />
      <LeadershipSection />
      <TeamSection />
      <ServicesSection />
      <UpdatesSection />
      <TestimonialsSection />

    </>
  );
}
