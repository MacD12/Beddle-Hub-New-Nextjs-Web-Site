import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FeatureGrid } from '../components/FeatureGrid';
import { FinalCTA } from '../components/FinalCTA';
import { builtForItems } from '../components/siteData';

export const industrySlug = (label: string) =>
  label.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/** Slugs for every industry — handy for the [slug] route's generateStaticParams. */
export const industrySlugs = builtForItems.map((i) => industrySlug(i.label));

export const Industries: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Industries"
      title="Built for every kind of experience."
      subtitle="From surf camps to mountain expeditions, retreats to wave parks — Beddle Hub adapts to how you host, run, and grow."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <FeatureGrid
          items={builtForItems}
          columns="md:grid-cols-2 lg:grid-cols-3"
          getHref={(label) => `/industries/${industrySlug(label)}`}
        />
      </section>
    </Reveal>

    <Reveal>
      <FinalCTA />
    </Reveal>
  </>
);

export default Industries;
