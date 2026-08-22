"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import JournalHero from "@/app/components/journal/JournalHero";
import JournalBasics from "@/app/components/journal/JournalBasics";
import JournalTraining from "@/app/components/journal/JournalTraining";
import JournalMood from "@/app/components/journal/JournalMood";
import JournalReflection from "@/app/components/journal/JournalReflection";
import JournalHighlights from "@/app/components/journal/JournalHighlights";
import JournalFinal from "@/app/components/journal/JournalFinal";

export default function JournalPage() {
  return (
    <>
      <Navbar />

      <main className="journal-page">
        <JournalHero />

        <JournalBasics />

        <JournalTraining />

        <JournalMood />

        <JournalReflection />

        <JournalHighlights />

        <JournalFinal />
      </main>

      <Footer />
    </>
  );
}