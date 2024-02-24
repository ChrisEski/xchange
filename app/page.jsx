import SectionContainer from "@/components/SectionContainer";
import SectionFeatured from "@/components/SectionFeatured";
import SectionNewsletter from "@/components/SectionNewsletter";
import SectionPosts from "@/components/SectionPosts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <SectionContainer>
        <SectionPosts category="latest" />
      </SectionContainer>
      <SectionContainer bgColor="bg-section">
        <SectionNewsletter />
      </SectionContainer>
      <SectionContainer>
        <SectionPosts category="technology" />
      </SectionContainer>
      <SectionContainer bgColor="bg-section">
        <SectionFeatured />
      </SectionContainer>
    </main>
  );
}
