import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { builtForItems } from '@/components/siteData';
import { IndustryDetail } from '@/views/IndustryDetail';
import { industrySlug, industrySlugs } from '@/views/Industries';

export function generateStaticParams() {
  return industrySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = builtForItems.find((i) => industrySlug(i.label) === slug);
  if (!item) return { title: 'Industry not found' };
  return {
    title: `Beddle Hub for ${item.label}`,
    description: item.desc ?? `One platform to host, run, and grow your ${item.label.toLowerCase()} business.`,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = builtForItems.some((i) => industrySlug(i.label) === slug);
  if (!exists) notFound();
  return <IndustryDetail slug={slug} />;
}
