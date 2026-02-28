import { publications } from "@/data/publications";
import PublicationAccordion from "@/components/PublicationAccordion";
import Image from "next/image";

export default function PublicationsPage() {
  return (
    <>
      <section className="relative h-[75vh] flex items-center justify-center">
        <Image
          src="/background3.png"
          alt="Research"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/90 to-brand-primary/70" />

        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Publications
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Below, you’ll find my writing organized by publication type and
            year. For questions on any specific publication, feel free to
            message my office, and a teaching staff member will respond as soon
            as possible.
          </p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Papers</h1>

        <PublicationAccordion data={publications} />
      </div>
    </>
  );
}
