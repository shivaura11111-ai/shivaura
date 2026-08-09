import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "2D Floor Plan Design", href: "/services/2d-floor-plan" },
  { label: "3D Front Elevation", href: "/services/3d-front-elevation" },
  { label: "Residential Architecture", href: "/services/residential-architecture" },
  { label: "Commercial Architecture", href: "/services/commercial-architecture" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Villa Design", href: "/services/villa-design" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/greenn_bugg_house_deziign?igsh=bTBqMTIxeTdud3k3", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1BG2zyaMYK/", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com/@greennbugg", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com/company/greennbugg", icon: Linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-offwhite/80">
      <div className="container-architect grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-baseline whitespace-nowrap">
            <span className="font-display text-2xl font-semibold text-offwhite">
               SHIV
            </span>
            <span className="ml-2 text-xs uppercase tracking-[0.3em] text-gold-500">
              AURA
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-offwhite/60">
            A premium architecture and interior design studio crafting
            functional, beautiful, and lasting spaces across India.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center border border-offwhite/15 transition-colors hover:border-gold-500 hover:text-gold-500"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg text-offwhite">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg text-offwhite">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-4 text-lg text-offwhite">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
  <MapPin size={18} className="mt-1 shrink-0 text-gold-500" />

  <div className="space-y-4">
    <div>
      <h4 className="font-semibold text-offwhite">Muzaffarpur Office</h4>
      <p className="text-offwhite/70">
        Umanagar, Near SKMCH HP Petrol Pump,
        <br />
        Muzaffarpur, Bihar - 842004
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-offwhite">Noida Office</h4>
      <p className="text-offwhite/70">
        H-Block, Sector-63,
        <br />
        Noida, Uttar Pradesh - 201301
      </p>
    </div>
  </div>
</li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-gold-500" />
              <a href="tel:+919000000000" className="transition-colors hover:text-gold-500">
                +91 6203740886 <br/>
                +91 7827398853
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-gold-500" />
              <a
                href="mailto:shivaura11111@gmail.com"
                className="transition-colors hover:text-gold-500"
              >
                shivaura11111@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-gold-500" />
              <span>
                Monday – Saturday: 10:00 AM – 7:00 PM · Sunday: By appointment
                only
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="container-architect flex flex-col items-center justify-between gap-4 py-6 text-xs text-offwhite/50 sm:flex-row">
          <p>
            © {year} Shivaura House Deziign. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-gold-500">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-gold-500">
              Terms &amp; Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-500">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
