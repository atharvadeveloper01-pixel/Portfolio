import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Mail, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/constants/personal";
import ContactForm from "./ContactForm";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: GithubIcon, label: "GitHub", value: "atharvajahagirdar1", href: PERSONAL.github },
  { icon: LinkedinIcon, label: "LinkedIn", value: "atharvajahagirdar", href: PERSONAL.linkedin },
  { icon: MapPin, label: "Location", value: PERSONAL.location, href: null },
];

export default function Contact() {
  return (
    <Section id="contact" size="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left — info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
                Let&apos;s build something<br />together.
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
                Whether you have a Flutter project in mind, an internship opportunity,
                or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 transition-all hover:border-zinc-700 hover:bg-zinc-900/60"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{label}</p>
                      <p className="text-sm font-medium text-zinc-200">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                      <Icon className="h-4 w-4 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500">{label}</p>
                      <p className="text-sm font-medium text-zinc-200">{value}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Clock className="h-3.5 w-3.5" />
              <span>Average response time: within 24 hours</span>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
