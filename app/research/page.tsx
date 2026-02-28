import ResearchCard from "@/components/ResearchCard";
import Image from "next/image";

export default function ResearchPage() {
  return (
    <>
      <section className="relative h-[75vh] flex items-center justify-center">
        <Image
          src="/images/background2.png"
          alt="Research"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 to-brand-primary/70" />

        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Research Interests
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Our research focuses on developing innovative synthetic
            methodologies inspired by natural systems, with emphasis on
            sustainable chemistry, molecular design, and catalytic strategies.
          </p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <ResearchCard
            title="Organic Synthesis"
            points={[
              "Development of new synthetic methodologies",
              "Construction of complex molecular architectures",
              "C–C and C–heteroatom bond formation strategies"
            ]}
          />
          <ResearchCard
            title="Bioinspired / Biomimetic Chesmistry"
            points={[
              "Mimicking natural enzymatic processes",
              "Designing nature-inspired catalysts",
              "Sustainable reaction pathways"
            ]}
          />
          <ResearchCard
            title="Catalysis"
            points={[
              "Green catalysis",
              "Organocatalysis",
              "Metal-free transformations"
            ]}
          />
        </div>
      </div>
    </>
  );
}
