import Link from "next/link";
import { Mail, Play, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PERSONAL } from "@/constants/personal";
import Container from "@/components/layout/Container";

interface ExperienceCTAProps {
  github: string | null;
  demo: string | null;
  isPlayStore?: boolean;
  accent: string;
  projectName?: string;
}

export default function ExperienceCTA({ github, demo, isPlayStore, accent, projectName }: ExperienceCTAProps) {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-zinc-800/60">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 lg:p-16 text-center">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-10"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${accent} 0%, transparent 70%)`,
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
                Let&apos;s Build Together
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-4">
                Need a Flutter Application?
              </h2>
              <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                {projectName
                  ? `If ${projectName} reflects the kind of quality you're looking for, I'd love to help bring your app idea to life.`
                  : "I'm available for freelance projects and internship opportunities. Let's turn your idea into a production-ready mobile experience."
                }
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center gap-2 rounded-full px-8 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02]"
                style={{ backgroundColor: accent }}
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </Link>

              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Source
                </Link>
              )}

              {demo && (
                <Link
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                >
                  {isPlayStore ? (
                    <><Play className="h-4 w-4 fill-current" />Play Store</>
                  ) : (
                    <><ExternalLink className="h-4 w-4" />Live Demo</>
                  )}
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
