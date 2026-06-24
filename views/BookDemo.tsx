import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Link } from '../components/router';

const EXPECT = [
  'A 30-minute walk-through tailored to your operation.',
  'Answers to your questions on pricing, migration, and setup.',
  'A clear view of how Beddle Hub fits your workflow — no pressure.',
];

export const BookDemo: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Book a demo"
      title="See Beddle Hub in action."
      subtitle="Book a personalized walk-through and discover how much simpler your operation can be."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Book a demo' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">What to expect</h2>
        <ul className="space-y-4 mb-12">
          {EXPECT.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-gray-600 leading-relaxed">
              <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Check className="w-4 h-4" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="shine-btn inline-flex items-center bg-[#2d2d2d] text-white px-8 py-4 rounded-full font-medium hover:bg-black hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-0.5 transition-all duration-300 group"
        >
          Request your demo <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </Reveal>
  </>
);

export default BookDemo;
