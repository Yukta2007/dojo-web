import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LineageTimeline from "@/app/components/lineage/LineageTimeline";

export default function LineagePage() {
  return (
    <div className="lineage-page">
      <Navbar />

      <main>
        <LineageTimeline />
      </main>

      <Footer />
    </div>
  );
}