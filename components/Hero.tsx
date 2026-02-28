import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center">
      <Image
        src="/hero.png"
        alt="Research"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/80 to-brand-primary/70" />

      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          College Research Publications
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Advancing Innovation Through Academic Excellence
        </p>

        <Link href="/publications">
          <button className="mt-8 bg-white text-brand-primary px-8 py-3 rounded-full font-semibold hover:bg-brand-light transition shadow-lg">
            Explore Publications
          </button>
        </Link>
      </div>
    </section>
  );
}
