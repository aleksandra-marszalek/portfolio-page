import AboutSection from "@/components/sections/AboutSection";
import LinksSection from "@/components/sections/LinksSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import LatestPosts from "@/components/sections/LatestPosts";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <AboutSection />
      <LinksSection />
      <FeaturedProjects />
      <LatestPosts />
    </div>
  );
}
