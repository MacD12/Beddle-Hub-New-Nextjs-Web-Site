import type { Metadata } from 'next';
import { Industries } from '@/views/Industries';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Built for retreats, surf camps, mountain guiding, glamping, wave parks, and more. One platform for every kind of experience.',
  alternates: { canonical: '/industries' },
};

export default function Page() {
  return <Industries />;
}
