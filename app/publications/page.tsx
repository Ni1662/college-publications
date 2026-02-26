import { publications } from "@/data/publications";
import PublicationAccordion from "@/components/PublicationAccordion";

export default function PublicationsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Publications
      </h1>

      <PublicationAccordion data={publications} />
    </div>
  );
}