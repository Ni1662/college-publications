import PersonCard from "@/components/PersonCard";

export default function PeoplePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our Team
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <PersonCard
          name="Dr. Professor Name"
          role="Head of Research"
          image="/images/professor.jpg"
        />
        <PersonCard
          name="PhD Student 1"
          role="Doctoral Researcher"
          image="/images/student1.jpg"
        />
        <PersonCard
          name="PhD Student 2"
          role="Doctoral Researcher"
          image="/images/student2.jpg"
        />
      </div>
    </div>
  );
}