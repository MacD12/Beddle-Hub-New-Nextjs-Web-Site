import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FeatureGrid } from '../components/FeatureGrid';
import { FinalCTA } from '../components/FinalCTA';
import { platformItems, featureItems } from '../components/siteData';

export const Products: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Products"
      title="One connected platform."
      subtitle="PMS, payments, distribution, marketing, and intelligence — every product works as one so your whole operation moves together."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Core platform</h2>
        <FeatureGrid items={platformItems} columns="md:grid-cols-2 lg:grid-cols-3" />
      </section>
    </Reveal>

    <Reveal>
      <section className="pb-12 md:pb-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Features</h2>
        <FeatureGrid items={featureItems} columns="md:grid-cols-2 lg:grid-cols-4" />
      </section>
    </Reveal>

    <Reveal>
      <FinalCTA />
    </Reveal>
  </>
);

export default Products;
