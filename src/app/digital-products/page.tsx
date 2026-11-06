import type { Metadata } from "next";
import { DigitalProductsPageClient } from "./DigitalProductsPageClient";

export const metadata: Metadata = {
  title: "Digital Products & Platforms | Gagan Handral",
  description:
    "AI customer support platforms and personalized learning systems: ECHO AI platform and Mind Mentor – An AI Study Assistant by Gagan Handral.",
  openGraph: {
    title: "Digital Products & Platforms | Gagan Handral",
    description:
      "Bridging engineering logic with creative interface design: AI customer support and personalized learning platforms.",
  },
};

export default function DigitalProductsPage() {
  return <DigitalProductsPageClient />;
}
