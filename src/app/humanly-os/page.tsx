import { HumanlyOSSection } from "@/components/sections/humanlyOSComponents/HumanlyOS";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "HumanlyOS® — The Operating System",
  description: "A converged platform unifying property management, resident experience, and service delivery.",
};

export default function HumanlyOSPage() {
  return (
    <main className="bg-[#0f0f0e]">
      <Nav />
      <HumanlyOSSection />
      <Footer />
    </main>
  );
}
