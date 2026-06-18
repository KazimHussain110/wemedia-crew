import { redirect, notFound } from 'next/navigation';
import { projects } from '../../../../lib/workData';

export default async function LegacySlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  if (project.medium === 'video') {
    redirect(`/work/videography/${slug}`);
  } else {
    redirect(`/work/photography/${slug}`);
  }
}
