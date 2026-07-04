"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/portfolio";
import { assetPath } from "@/lib/site";

type ProjectShowcaseCardProps = {
  project: Project;
  index: number;
};

export function ProjectShowcaseCard({ project, index }: ProjectShowcaseCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spotlightX = useMotionValue(-500);
  const spotlightY = useMotionValue(-500);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 22
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 22
  });
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, rgba(116, 111, 255, 0.20), transparent 70%)`;

  function handlePointerMove(event: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    spotlightX.set(x);
    spotlightY.set(y);
    pointerX.set(x / bounds.width - 0.5);
    pointerY.set(y / bounds.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
    spotlightX.set(-500);
    spotlightY.set(-500);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className="[perspective:1200px]"
    >
      <motion.article
        data-project-card
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
        whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d"
        }}
        className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 transition duration-300 group-hover:ring-primary/40" />

        <div className="grid min-h-[390px] md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden border-b border-white/10 bg-[#0d1422] md:min-h-full md:border-b-0 md:border-r">
            <motion.div
              className="absolute inset-0"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={assetPath(project.image)}
                alt={`${project.name} project preview`}
                fill
                className={
                  project.slug === "dairyflow" || project.slug === "eduflow"
                    ? "bg-slate-50 object-contain p-2 transition duration-700 group-hover:saturate-[1.08]"
                    : "object-cover transition duration-700 group-hover:saturate-[1.12]"
                }
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d18]/90 via-transparent to-black/10" />
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              0{index + 1}
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-10 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-white/80">{project.impact}</p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col p-6 sm:p-7" style={{ transform: "translateZ(20px)" }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary sm:text-sm">{project.eyebrow}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-slate-200 transition group-hover:border-primary/25"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-7">
              <Button asChild size="sm" variant="outline" className="border-white/10 bg-white/[0.025]">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Code2 className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-white/10 bg-white/[0.025]">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="sm" variant="primary" className="shadow-[0_0_28px_rgba(100,103,242,0.25)]">
                <Link href={`/projects/${project.slug}`}>
                  Case Study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}
