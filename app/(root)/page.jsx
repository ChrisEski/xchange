// import Banner from "@/components/Banner";
// import SectionContainer from "@/components/SectionContainer";
// import SectionFeatured from "@/components/SectionFeatured";
// import SectionNewsletter from "@/components/SectionNewsletter";
// import SectionPosts from "@/components/SectionPosts";
// import SectionSocials from "@/components/SectionSocials";
export const revalidate = 60;

import Banner from "@/components/(Sections)/Banner";
import SectionContainer from "@/components/(Sections)/SectionContainer";
import SectionFeatured from "@/components/(Sections)/SectionFeatured";
import SectionNewsletter from "@/components/(Sections)/SectionNewsletter";
import SectionPosts from "@/components/(Sections)/SectionPosts";
import SectionSocials from "@/components/(Sections)/SectionSocials";

export default function Home() {
  return (
    <div>
      <SectionContainer>
        <Banner />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="latest"
          viewAll={false}
          related={false}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionNewsletter />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="technology"
          viewAll={true}
          related={false}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionSocials />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="traveling"
          viewAll={true}
          related={false}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionFeatured />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="psychology"
          viewAll={true}
          related={false}
        />
      </SectionContainer>
    </div>
  );
}
