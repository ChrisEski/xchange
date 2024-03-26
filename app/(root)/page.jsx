export const dynamic = "force-dynamic";

import Banner from "@/components/(Sections)/Banner";
import SectionContainer from "@/components/(Sections)/SectionContainer";
import SectionFeatured from "@/components/(Sections)/SectionFeatured";
import SectionNewsletter from "@/components/(Sections)/SectionNewsletter";
import SectionPosts from "@/components/(Sections)/SectionPosts";
import SectionSocials from "@/components/(Sections)/SectionSocials";

export default function Home() {
  const showBorders = false;
  return (
    <div>
      <SectionContainer>
        <Banner showBorders={showBorders} />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="latest"
          viewAll={false}
          related={false}
          showBorders={showBorders}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionNewsletter showBorders={showBorders} />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="technology"
          viewAll={true}
          related={false}
          showBorders={showBorders}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionSocials showBorders={showBorders} />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="traveling"
          viewAll={true}
          related={false}
          showBorders={showBorders}
        />
      </SectionContainer>

      <SectionContainer bgColor="bg-section">
        <SectionFeatured showBorders={showBorders} />
      </SectionContainer>

      <SectionContainer>
        <SectionPosts
          category="psychology"
          viewAll={true}
          related={false}
          showBorders={showBorders}
        />
      </SectionContainer>
    </div>
  );
}
