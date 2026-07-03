import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { assetPath } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.name} Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} Case Study`,
      description: project.description,
      images: [{ url: project.image }]
    }
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <Button asChild variant="outline">
          <Link href="/#projects">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </Button>

        <section className="grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">{project.eyebrow}</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{project.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="primary">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Code2 className="h-4 w-4" /> GitHub Repository
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="glass relative overflow-hidden rounded-2xl p-3">
            <Image src={assetPath(project.image)} width={1200} height={675} alt={`${project.name} project preview`} className="aspect-video rounded-xl bg-slate-50 object-contain" />
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{project.caseStudy.problem}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold">Solution</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{project.caseStudy.solution}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold">Outcome</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{project.caseStudy.outcome}</p>
            </CardContent>
          </Card>
        </section>

        <section className="py-16">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold">Technologies Used</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold">Features</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="rounded-lg bg-muted p-4 font-medium">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="pb-16">
          <h2 className="mb-6 text-3xl font-semibold">Image Gallery</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((image) => (
              <div key={image} className="glass relative overflow-hidden rounded-2xl p-2">
                <Image src={assetPath(image)} width={1200} height={675} alt={`${project.name} gallery image`} className="aspect-video rounded-xl bg-slate-50 object-contain" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
