import ResearchCard from "@/components/ResearchCard";

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Research Interests
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <ResearchCard
          title="Organic Synthesis"
          description="Innovative synthetic methodologies and complex molecule construction."
        />
        <ResearchCard
          title="Bioinspired Catalysis"
          description="Nature-inspired catalysts for sustainable chemistry."
        />
        <ResearchCard
          title="Green Chemistry"
          description="Eco-friendly and efficient reaction pathways."
        />
      </div>
    </div>
  );
}