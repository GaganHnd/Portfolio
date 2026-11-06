import type { Metadata } from "next";
import { GraphicDesignPageClient } from "./GraphicDesignPageClient";

export const metadata: Metadata = {
  title: "Graphic Design Showcase | Gagan Handral",
  description:
    "Selected graphic design work: Trade Triumph poster, Constitution Day poster, Phoenix 2.0 Promo War poster, and Udbhava Club visual identity by Gagan Handral.",
  openGraph: {
    title: "Graphic Design Showcase | Gagan Handral",
    description:
      "Event poster compositions, promotional creative direction, and geometric visual identities by Gagan Handral.",
  },
};

export default function GraphicDesignPage() {
  return <GraphicDesignPageClient />;
}
