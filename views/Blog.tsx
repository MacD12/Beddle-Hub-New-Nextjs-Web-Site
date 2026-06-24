import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { FinalCTA } from '../components/FinalCTA';
import { Link } from '../components/router';
import { articles, readLabel } from '../components/articles';

export const Blog: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Blog"
      title="Ideas, playbooks & product news."
      subtitle="Practical guides and stories to help you run a better operation."
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
    />

    <Reveal>
      <section className="py-12 md:py-16 px-4 lg:px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => (
            <Link
              key={post.slug}
              to={`/resources/${post.slug}`}
              className="group flex flex-col bg-[#f5f5f5] rounded-3xl p-8 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_28px_55px_-28px_rgba(0,0,0,0.25)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <span className="inline-flex items-center self-start text-xs font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full mb-6">
                {post.tag}
              </span>
              <h3 className="text-2xl font-semibold leading-snug mb-3 group-hover:text-emerald-800 transition-colors">{post.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-8 text-sm text-gray-500">
                <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {readLabel(post)}</span>
                <ArrowRight className="w-5 h-5 text-gray-900 group-hover:translate-x-1 group-hover:text-emerald-700 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>

    <Reveal>
      <FinalCTA />
    </Reveal>
  </>
);

export default Blog;
