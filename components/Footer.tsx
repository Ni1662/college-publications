import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-light text-brand-primary mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            College Research Portal
          </h2>
          <p className="text-sm text-brand-primary/80 leading-relaxed">
            Dedicated to advancing research excellence through innovation,
            collaboration, and impactful publications across multiple
            disciplines.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-brand-primary/80 hover:text-brand-dark transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/research"
                className="text-brand-primary/80 hover:text-brand-dark transition"
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className="text-brand-primary/80 hover:text-brand-dark transition"
              >
                Publications
              </Link>
            </li>
            <li>
              <Link
                href="/people"
                className="text-brand-primary/80 hover:text-brand-dark transition"
              >
                People
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2 text-brand-primary/80">
            <li>Email: research@college.edu</li>
            <li>Phone: +91 98765 43210</li>
            <li>Mumbai, Maharashtra, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white/20 p-2 rounded-lg hover:bg-brand-light hover:text-brand-primary transition"
            >
              🌐
            </a>
            <a
              href="#"
              className="bg-white/20 p-2 rounded-lg hover:bg-brand-light hover:text-brand-primary transition"
            >
              🐦
            </a>
            <a
              href="#"
              className="bg-white/20 p-2 rounded-lg hover:bg-brand-light hover:text-brand-primary transition"
            >
              💼
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-secondary py-6 text-center text-sm text-white/90">
        © {new Date().getFullYear()} College Research Portal. All rights reserved.
      </div>
    </footer>
  );
}