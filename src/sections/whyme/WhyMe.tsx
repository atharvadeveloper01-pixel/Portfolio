import {
  Code2, Shield, Database, Link, Monitor, Clock, MessageSquare, BookOpen, Layers,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const FEATURES = [
  { icon: Code2, title: "Clean Code", body: "Readable, documented, and structured so future developers can pick it up without confusion." },
  { icon: Shield, title: "Production Quality", body: "Code that doesn't just work in demos — built to handle real users and edge cases." },
  { icon: Database, title: "Firebase Expert", body: "Auth, Firestore, Storage, and push notifications — fully integrated and secured." },
  { icon: Link, title: "API Integration", body: "REST APIs connected reliably with proper error handling, loading states, and retry logic." },
  { icon: Layers, title: "Scalable Architecture", body: "Provider-based state management and clean folder structures that grow with the project." },
  { icon: Clock, title: "Reliable Delivery", body: "I set realistic timelines and keep them — with regular updates throughout the project." },
  { icon: Monitor, title: "Responsive UI", body: "Every screen works beautifully on phones and tablets without extra effort from you." },
  { icon: MessageSquare, title: "Clear Communication", body: "You'll never be left wondering what's happening. Regular updates, quick replies." },
  { icon: BookOpen, title: "Continuous Learning", body: "I actively follow Flutter releases, best practices, and community developments to stay current." },
];

export default function WhyMe() {
  return (
    <Section size="lg">
      <Container>
        <SectionHeading
          title="Why Work With Me"
          subtitle="The details that make the difference between an app that works and one that lasts."
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                <Icon className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-100">{title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
