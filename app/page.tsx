"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TerminalSquare
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { TypingEffect } from "@/components/typing-effect";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { certifications, profile, projects, services, skills, testimonials, timeline } from "@/data/portfolio";
import { assetPath, siteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillBrand: Record<string, { icon?: string; logo: string; className: string; iconClassName?: string }> = {
  Java: { icon: `${deviconBase}/java/java-original.svg`, logo: "Java", className: "border-orange-300/70 bg-orange-500/10 text-orange-700 dark:text-orange-100" },
  Kotlin: { icon: `${deviconBase}/kotlin/kotlin-original.svg`, logo: "Kotlin", className: "border-purple-300/70 bg-purple-500/10 text-purple-700 dark:text-purple-100" },
  Python: { icon: `${deviconBase}/python/python-original.svg`, logo: "Python", className: "border-blue-300/70 bg-blue-500/10 text-blue-700 dark:text-blue-100" },
  PHP: { icon: `${deviconBase}/php/php-original.svg`, logo: "PHP", className: "border-indigo-300/70 bg-indigo-500/10 text-indigo-700 dark:text-indigo-100" },
  JavaScript: { icon: `${deviconBase}/javascript/javascript-original.svg`, logo: "JavaScript", className: "border-yellow-300/80 bg-yellow-400/15 text-yellow-700 dark:text-yellow-100" },
  C: { icon: `${deviconBase}/c/c-original.svg`, logo: "C", className: "border-blue-300/70 bg-blue-500/10 text-blue-700 dark:text-blue-100" },
  "C++": { icon: `${deviconBase}/cplusplus/cplusplus-original.svg`, logo: "C++", className: "border-sky-300/70 bg-sky-500/10 text-sky-700 dark:text-sky-100" },
  HTML: { icon: `${deviconBase}/html5/html5-original.svg`, logo: "HTML5", className: "border-orange-300/70 bg-orange-600/10 text-orange-700 dark:text-orange-100" },
  CSS: { icon: `${deviconBase}/css3/css3-original.svg`, logo: "CSS3", className: "border-blue-300/70 bg-blue-600/10 text-blue-700 dark:text-blue-100" },
  Bootstrap: { icon: `${deviconBase}/bootstrap/bootstrap-original.svg`, logo: "Bootstrap", className: "border-violet-300/70 bg-violet-500/10 text-violet-700 dark:text-violet-100" },
  React: { icon: `${deviconBase}/react/react-original.svg`, logo: "React", className: "border-cyan-300/70 bg-cyan-500/10 text-cyan-700 dark:text-cyan-100" },
  CodeIgniter: { icon: `${deviconBase}/codeigniter/codeigniter-plain.svg`, logo: "CodeIgniter", className: "border-red-300/70 bg-red-500/10 text-red-700 dark:text-red-100" },
  "REST APIs": { logo: "API", className: "border-emerald-300/70 bg-emerald-500/10 text-emerald-700 dark:text-emerald-100" },
  "Android Studio": { icon: `${deviconBase}/androidstudio/androidstudio-original.svg`, logo: "Android Studio", className: "border-green-300/70 bg-green-500/10 text-green-700 dark:text-green-100" },
  "Jetpack Compose": { icon: `${deviconBase}/jetpackcompose/jetpackcompose-original.svg`, logo: "Compose", className: "border-teal-300/70 bg-teal-500/10 text-teal-700 dark:text-teal-100" },
  PostgreSQL: { icon: `${deviconBase}/postgresql/postgresql-original.svg`, logo: "PostgreSQL", className: "border-blue-300/70 bg-blue-500/10 text-blue-700 dark:text-blue-100" },
  Supabase: { icon: `${deviconBase}/supabase/supabase-original.svg`, logo: "Supabase", className: "border-emerald-300/70 bg-emerald-500/10 text-emerald-700 dark:text-emerald-100" },
  MySQL: { icon: `${deviconBase}/mysql/mysql-original.svg`, logo: "MySQL", className: "border-cyan-300/70 bg-cyan-500/10 text-cyan-700 dark:text-cyan-100" },
  Git: { icon: `${deviconBase}/git/git-original.svg`, logo: "Git", className: "border-orange-300/70 bg-orange-500/10 text-orange-700 dark:text-orange-100" },
  GitHub: { icon: `${deviconBase}/github/github-original.svg`, logo: "GitHub", className: "border-zinc-300/80 bg-zinc-500/10 text-zinc-800 dark:text-zinc-100", iconClassName: "dark:invert" },
  "VS Code": { icon: `${deviconBase}/vscode/vscode-original.svg`, logo: "VS Code", className: "border-sky-300/70 bg-sky-500/10 text-sky-700 dark:text-sky-100" }
};

function SkillBadge({ skill, compact = false }: { skill: string; compact?: boolean }) {
  const brand = skillBrand[skill] ?? {
    logo: skill.slice(0, 2),
    className: "border-border bg-muted text-muted-foreground"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur transition hover:-translate-y-0.5",
        compact ? "px-3 py-1.5" : "px-3.5 py-2",
        brand.className
      )}
    >
      <span className="grid h-6 min-w-6 place-items-center rounded-full bg-background/90 px-1 shadow-sm">
        {brand.icon ? (
          <img src={brand.icon} alt="" aria-hidden="true" className={cn("h-4 w-4 object-contain", brand.iconClassName)} loading="lazy" />
        ) : (
          <span className="text-[10px] font-black tracking-tight text-foreground">{brand.logo}</span>
        )}
      </span>
      {skill}
    </span>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-lg text-muted-foreground">{body}</p> : null}
    </motion.div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Full Stack Developer and Android Developer",
    email: profile.email,
    url: siteUrl,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: Object.values(skills).flat()
  };

  return (
    <main className="overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/55 backdrop-blur-2xl">
        <nav className="content-shell flex h-16 items-center justify-between lg:h-20">
          <a href="#home" className="group flex items-center gap-2 text-sm font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-glow transition group-hover:scale-105">S</span>
            Suraj.dev
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[15px] font-medium text-muted-foreground transition hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="primary" size="sm" className="hidden md:inline-flex">
              <a href="#contact">Hire Me</a>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="biz-grid absolute inset-0 -z-20" />
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-36 top-20 h-[520px] w-[520px] animate-float rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -right-28 top-32 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="content-shell">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-5xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-muted-foreground shadow-panel backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Portfolio for show my work
            </div>
            <h1 className="text-balance bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
              Suraj Pandhare builds scalable software experiences.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-balance text-2xl font-medium text-muted-foreground sm:text-3xl">
              I build <TypingEffect words={["scalable apps.", "Android products.", "full-stack systems.", "clean user experiences."]} />
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              MCS student, full stack developer, and Android developer passionate about building fast,
              polished applications with practical architecture and thoughtful interfaces.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="primary" size="lg">
                <a href={assetPath("/images/Resume.png")} download>
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>
            <div className="mt-7 flex justify-center gap-3">
              <Button asChild variant="ghost" className="h-11 w-11 px-0" aria-label="GitHub">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Code2 className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="h-11 w-11 px-0" aria-label="LinkedIn">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <BriefcaseBusiness className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="h-11 w-11 px-0" aria-label="Email">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 34, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto mt-14 max-w-6xl">
            <div className="absolute -inset-8 rounded-[2rem] bg-primary/20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[1.75rem] p-4">
              <div className="flex items-center justify-between border-b border-white/10 px-2 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Developer command center</p>
              </div>
              <div className="grid gap-4 pt-4 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={assetPath("/images/suraj-formal.png")}
                      width={320}
                      height={400}
                      priority
                      alt="Suraj Pandhare in formal business attire"
                      className="h-32 w-28 shrink-0 rounded-2xl object-cover object-top shadow-glow sm:h-36 sm:w-32"
                    />
                    <div>
                      <p className="text-sm text-muted-foreground">Full Stack & Android Developer</p>
                      <h2 className="mt-1 text-2xl font-semibold">Suraj Pandhare</h2>
                      <p className="mt-2 text-sm text-muted-foreground">{profile.location}</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-background/70 p-4"><p className="text-2xl font-bold"><AnimatedCounter value={12} />+</p><p className="text-xs text-muted-foreground">Projects</p></div>
                    <div className="rounded-2xl bg-background/70 p-4"><p className="text-2xl font-bold"><AnimatedCounter value={6} />+</p><p className="text-xs text-muted-foreground">Stacks</p></div>
                    <div className="rounded-2xl bg-background/70 p-4"><p className="text-2xl font-bold"><AnimatedCounter value={95} suffix="+" /></p><p className="text-xs text-muted-foreground">Score</p></div>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {projects.slice(0, 4).map((project) => (
                    <div key={project.slug} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{project.eyebrow}</p>
                      <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{project.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-5">
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((skill, index) => (
            <SkillBadge key={`${skill}-${index}`} skill={skill} compact />
          ))}
        </div>
      </section>

      <section id="about" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="About" title="Developer mindset, product taste, and hands-on execution." body="Suraj combines computer science fundamentals with modern app development to build reliable software for real users." />
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["MCS Student", GraduationCap],
              ["Full Stack Developer", Code2],
              ["Android Developer", Smartphone],
              ["Scalable App Builder", Rocket]
            ].map(([label, Icon]) => (
              <Card key={String(label)} className="group hover:-translate-y-1 hover:shadow-glow transition">
                <CardContent>
                  <Icon className="mb-5 h-7 w-7 text-primary" />
                  <h3 className="text-xl font-semibold">{String(label)}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">Passionate about building scalable, maintainable, and user-friendly applications.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="bg-muted/35 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Skills" title="A practical stack for web, mobile, backend, and databases." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group}>
                <CardContent>
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold"><TerminalSquare className="h-5 w-5 text-primary" /> {group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <SkillBadge key={item} skill={item} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Projects" title="Selected GitHub work with product-focused case studies." body="Projects are sourced from the PandhareSuraj GitHub account and shaped into portfolio-ready narratives." />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article key={project.slug} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.05 }} className="group glass overflow-hidden rounded-2xl">
                <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-72 overflow-hidden bg-muted">
                    <Image src={assetPath(project.image)} alt={`${project.name} preview`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{project.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs font-medium">{tech}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline"><a href={project.github} target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" /> GitHub</a></Button>
                      <Button asChild size="sm" variant="outline"><a href={project.demo} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight className="h-4 w-4" /></a></Button>
                      <Button asChild size="sm" variant="primary"><Link href={`/projects/${project.slug}`}>Case Study</Link></Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-muted/35 px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Experience" title="BizFlow Internship" body="Hands-on exposure to professional workflows, practical development standards, and delivery-focused collaboration." />
          <Card>
            <CardContent className="grid gap-5 sm:grid-cols-3">
              {["Business workflow thinking", "Clean implementation habits", "Professional collaboration"].map((item) => (
                <div key={item} className="rounded-lg bg-muted p-5">
                  <BriefcaseBusiness className="mb-4 h-6 w-6 text-primary" />
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="education" className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Education" title="Education timeline" />
          <div className="relative border-l border-border pl-6">
            {timeline.map((item) => (
              <div key={item.title} className="mb-10">
                <span className="absolute -left-3 grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground"><Sparkles className="h-3 w-3" /></span>
                <p className="text-sm font-semibold text-primary">{item.year}</p>
                <h3 className="mt-1 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Proof" title="Certifications, GitHub statistics, and delivery signals." />
          <div className="grid gap-5 lg:grid-cols-2">
            <Card>
              <CardContent>
                <h3 className="text-2xl font-semibold">Certifications</h3>
                <div className="mt-5 grid gap-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 rounded-lg bg-muted p-4"><ShieldCheck className="h-5 w-5 text-primary" /> {cert}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-2xl font-semibold">GitHub Statistics</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted p-4"><p className="text-3xl font-bold"><AnimatedCounter value={13} /></p><p className="text-sm text-muted-foreground">Public repos</p></div>
                  <div className="rounded-lg bg-muted p-4"><p className="text-3xl font-bold"><AnimatedCounter value={5} /></p><p className="text-sm text-muted-foreground">Featured builds</p></div>
                  <div className="rounded-lg bg-muted p-4"><p className="text-3xl font-bold"><AnimatedCounter value={7} />+</p><p className="text-sm text-muted-foreground">Core languages</p></div>
                </div>
                <Button asChild variant="outline" className="mt-6"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" /> View GitHub profile</a></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title="Built for internships, jobs, freelance clients, and startup opportunities." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service}><CardContent><Star className="mb-4 h-5 w-5 text-primary" /><h3 className="text-lg font-semibold">{service}</h3></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/35 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimonials" title="Clear communication, practical execution, and polished delivery." />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent>
                  <p className="leading-7 text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                  <p className="mt-5 font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build something useful and beautiful.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">For internships, job opportunities, freelance projects, startup MVPs, or collaborations, send a message directly to email or WhatsApp.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="outline"><a href={`mailto:${profile.email}`}><Mail className="h-4 w-4" /> {profile.email}</a></Button>
              <Button asChild variant="primary"><a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a></Button>
            </div>
          </div>
          <Card><CardContent><ContactForm /></CardContent></Card>
        </div>
      </section>

      <footer className="border-t border-border px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Suraj Pandhare. Built with Next.js, React, Tailwind, Framer Motion, and Shadcn UI patterns.</p>
          <div className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
