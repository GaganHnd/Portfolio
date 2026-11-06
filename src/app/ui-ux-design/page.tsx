import type { Metadata } from "next";
import { UIUXPageClient } from "./UIUXPageClient";

export const metadata: Metadata = {
  title: "UI/UX Design Case Studies | Gagan Handral",
  description:
    "Selected UI/UX design case studies: Foodgo food delivery app, LeadFlow CRM dashboard, and Stylish fashion e-commerce by Gagan Handral.",
  openGraph: {
    title: "UI/UX Design Case Studies | Gagan Handral",
    description:
      "Interactive wireframes, user flows, and product design systems built for clarity and conversion.",
  },
};

export default function UIUXDesignPage() {
  return <UIUXPageClient />;
}
