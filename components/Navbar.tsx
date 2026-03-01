"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "People", href: "/people" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-brand-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="VKA Research Group Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold text-brand-primary tracking-wide">
            VKA Research Group
          </h1>
        </div>

        <div className="flex gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition ${
                  active
                    ? "text-brand-primary"
                    : "text-gray-600 hover:text-brand-primary"
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
