import ContactSection from "./sections/ContactSection";
import ClientsSection from "./sections/ClientsSection";
import HeroSection from "./sections/HeroSection";
import IndustriesSection from "./sections/IndustriesSection";
import PartnershipsSection from "./sections/PartnershipsSection";
import ServicesSection from "./sections/ServicesSection";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ClientsSection />
        <IndustriesSection />
        <ServicesSection />
        <PartnershipsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
