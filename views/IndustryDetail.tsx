import React from 'react';
import { Check } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { builtForItems } from '../components/siteData';
import { industrySlug } from './Industries';

const BENEFITS = [
  'A booking engine tuned to how you sell — nights, packages, courses, or memberships.',
  'Commission-free direct bookings that protect your margin and the guest relationship.',
  'Channel manager keeps availability in sync everywhere, automatically.',
  'Automated guest journeys from inquiry to post-stay rebooking.',
  'Real-time revenue and occupancy intelligence across every location.',
];

export const IndustryDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const item = builtForItems.find((i) => industrySlug(i.label) === slug);
  const title = item?.label ?? 'Your operation';

  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={`Beddle Hub for ${title}.`}
        subtitle={item?.desc ?? 'One connected platform to host, run, and grow your business.'}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: title },
        ]}
      />

      <Reveal>
        <section className="py-12 md:py-16 px-4 lg:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            Everything {title.toLowerCase()} need, in one place.
          </h2>
          <ul className="space-y-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-lg text-gray-600 leading-relaxed">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </>
  );
};

export default IndustryDetail;
