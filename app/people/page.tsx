import PersonCard from "@/components/PersonCard";

export default function PeoplePage() {
  return (
    <div className="bg-brand-soft">
      <div className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Our Research Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the scholars and researchers contributing to our academic
            excellence and scientific innovation.
          </p>
        </div>

        {/* Doctoral Students */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-10 bg-brand-primary rounded-full" />
            <h2 className="text-3xl font-semibold text-gray-800">
              Doctoral Students
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <PersonCard
              name="Kulsoom Sayed"
              role="Doctoral Researcher"
              image="/S5.jpeg"
            />
            <PersonCard
              name="Manasi Shinde"
              role="Doctoral Researcher"
              image="/S8.jpeg"
            />
          </div>
        </section>

        {/* Masters Students */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-10 bg-brand-primary rounded-full" />
            <h2 className="text-3xl font-semibold text-gray-800">
              Master's Students
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <PersonCard name="Nikhil Singh" role="Master's Student" image="/S2.jpeg" />
            <PersonCard name="Shiv Gupta" role="Master's Student" image="/S3.jpeg" />
            <PersonCard name="Yosha Jaria" role="Master's Student" image="/S4.jpeg" />
            <PersonCard name="Aryan Patil" role="Master's Student" image="/S7.jpeg" />
            <PersonCard name="Jeetusri S" role="Master's Student" image="/S6.jpeg" />
            <PersonCard name="Timothy Gladston" role="Master's Student" image="/S1.jpeg" />
          </div>
        </section>

      </div>
    </div>
  );
}