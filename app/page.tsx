import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src="/images/research.jpg"
              alt="Research"
              width={600}
              height={450}
              className="rounded-2xl shadow-lg object-cover"
            />

            {/* Soft Accent Border */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-brand-light rounded-2xl" />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Our Research
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Include your academic and professional biography here. Begin with
              your institution and current position. Mention additional roles,
              collaborations, and academic responsibilities that define your
              professional engagement.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Highlight your major research contributions, key publications, and
              significant achievements. Elaborate on your academic journey,
              research focus areas, and ongoing scientific pursuits.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Conclude with your degrees, awards, affiliations, memberships, and
              notable recognitions that reflect your scholarly impact.
            </p>

            <Link
              href="/publications"
              className="inline-block mt-8 bg-brand-primary text-white px-8 py-3 rounded-full hover:bg-brand-secondary transition shadow-md"
            >
              View Publications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
