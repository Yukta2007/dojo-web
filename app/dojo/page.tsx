"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import DojoHero from "@/app/components/dojo/DojoHero";
import KihonSection from "@/app/components/dojo/KihonSection";
import KataSection from "@/app/components/dojo/KataSection";
import KumiteSection from "@/app/components/dojo/KumiteSection";
import HojoUndoSection from "@/app/components/dojo/HojoUndoSection";

export default function DojoPage() {
  return (
    <>
      <Navbar />

      <main className="dojo-page">
        <DojoHero />

        <KihonSection />

        <KataSection />

        <KumiteSection />

        <HojoUndoSection />
      </main>

      <Footer />
    </>
  );
}