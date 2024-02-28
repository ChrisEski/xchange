import Banner from "@/components/Banner";
import SectionContainer from "@/components/SectionContainer";
import SectionFeatured from "@/components/SectionFeatured";
import SectionNewsletter from "@/components/SectionNewsletter";
import SectionPosts from "@/components/SectionPosts";
import SectionSocials from "@/components/SectionSocials";

export default function Home() {
  return (
    <main className="flex-1">
      <SectionContainer>
        <Banner />
      </SectionContainer>
      <SectionContainer>
        <SectionPosts
          category="latest"
          viewAll={false}
        />
      </SectionContainer>
      <SectionContainer bgColor="bg-section">
        <SectionNewsletter />
      </SectionContainer>
      <SectionContainer>
        <SectionPosts
          category="technology"
          viewAll={true}
        />
      </SectionContainer>
      <SectionContainer bgColor="bg-section">
        <SectionFeatured />
      </SectionContainer>
      <SectionContainer>
        <SectionPosts
          category="travelling"
          viewAll={true}
        />
      </SectionContainer>
      <SectionContainer bgColor="bg-section">
        <SectionSocials />
      </SectionContainer>
      <SectionContainer>
        <SectionPosts
          category="psycology"
          viewAll={true}
        />
      </SectionContainer>
    </main>
  );
}
