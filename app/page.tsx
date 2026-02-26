import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          About Our Research
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our department focuses on sustainable chemistry, catalytic systems,
          and innovative methodologies that contribute to global scientific
          progress and environmental responsibility.
        </p>
      </section>
    </>
  );
}