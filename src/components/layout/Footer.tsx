import Link from "next/link";
import { Mail, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { NAV_LINKS } from "@/constants/navigation";
import { PERSONAL } from "@/constants/personal";
import Container from "@/components/layout/Container";

const SOCIALS = [
  { icon: GithubIcon, href: PERSONAL.github, label: "GitHub" },
  { icon: LinkedinIcon, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PERSONAL.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/60 py-10">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <Link href="#home" className="flex items-center gap-2 text-zinc-100 hover:opacity-80 transition-opacity">
              <Code2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-bold">{PERSONAL.name}</span>
            </Link>
            <p className="text-xs text-zinc-600 max-w-xs">
              Flutter Developer based in {PERSONAL.location}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-zinc-500 hover:text-zinc-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800 text-zinc-500 transition-all hover:border-zinc-600 hover:text-zinc-200"
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-zinc-800/60 pt-6 flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
