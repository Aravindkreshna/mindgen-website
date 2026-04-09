import BodyClassName from "../../BodyClassName";
import AiAcceleratorsSection from "./sections/AiAcceleratorsSection";
import AiAnalystSection from "./sections/AiAnalystSection";
import AiBandSection from "./sections/AiBandSection";
import AiBenefitsSection from "./sections/AiBenefitsSection";
import AiCtaSection from "./sections/AiCtaSection";
import AiDeliverySection from "./sections/AiDeliverySection";
import AiFaqSection from "./sections/AiFaqSection";
import AiHeroSection from "./sections/AiHeroSection";
import AiOverviewSection from "./sections/AiOverviewSection";
import AiProofSection from "./sections/AiProofSection";
import AiResourcesSection from "./sections/AiResourcesSection";
import AiSolutionsSection from "./sections/AiSolutionsSection";
import SiteFooter from "../../site/SiteFooter";
import SiteHeader from "../../site/SiteHeader";

export default function ArtificialIntelligencePage() {
  return (
    <>
      <BodyClassName className="service-ai-page" />
      <SiteHeader />
      <main className="ai-service-main">
        <AiHeroSection />
        <AiBandSection />
        <AiOverviewSection />
        <AiBenefitsSection />
        <AiSolutionsSection />
        <AiAcceleratorsSection />
        <AiDeliverySection />
        <AiProofSection />
        <AiAnalystSection />
        <AiResourcesSection />
        <AiFaqSection />
        <AiCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
