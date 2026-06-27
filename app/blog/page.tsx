import type { Metadata } from 'next';
import { Blog } from '@/views/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas, playbooks, and product news to help you run a better hospitality operation.',
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return <Blog />;
}
