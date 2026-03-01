import PersonCard from "@/components/PersonCard";
import Image from "next/image";

export default function PeoplePage() {
  return (
    <>
      <section className="relative h-[75vh] flex items-center justify-center">
        <Image src="/group.jpeg" alt="Group" fill className="object-cover" />

        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/10" />
      </section>
      <div className="relative text-center text-white px-6 mt-6">
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-brand-primary/90">
          L-R: Jeetusri S, Nikhil Singh, Shiv Gupta, Dr. Vijay Kumar A, Yosha
          Jaria, Timothy Gladston, Manasi Shinde, Kulsoom Sayed
        </p>
      </div>
      <div className="bg-brand-soft">
        <div className="max-w-6xl mx-auto px-6 py-10">
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

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              <PersonCard
                name="Kulsoom Sayed"
                role="Doctoral Student"
                image="/S5.jpeg"
              />
              <PersonCard
                name="Manasi Shinde"
                role="Doctoral Student"
                image="/S8.jpeg"
              />
            </div>
          </section>

          {/* Masters Students */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-10 bg-brand-primary rounded-full" />
              <h2 className="text-3xl font-semibold text-gray-800">
                Masters Students
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              <PersonCard
                name="Nikhil Singh"
                role="Masters Student"
                image="/S2.jpeg"
              />
              <PersonCard
                name="Shiv Gupta"
                role="Masters Student"
                image="/S3.jpeg"
              />
              <PersonCard
                name="Yosha Jaria"
                role="Masters Student"
                image="/S4.jpeg"
              />
              <PersonCard
                name="Aryan Patil"
                role="Masters Student"
                image="/S9.jpeg"
              />
              <PersonCard
                name="Jeetusri S"
                role="Masters Student"
                image="/S6.jpeg"
              />
              <PersonCard
                name="Timothy Gladston"
                role="Masters Student"
                image="/S1.jpeg"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
