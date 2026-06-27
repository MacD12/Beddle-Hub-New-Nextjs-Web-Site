import type { Metadata } from 'next';
import { BookDemo } from '@/views/BookDemo';

export const metadata: Metadata = {
  title: 'Book a demo',
  description: 'See Beddle Hub in action. Book a personalized walk-through tailored to your operation.',
  alternates: { canonical: '/book-demo' },
};

export default function Page() {
  return <BookDemo />;
}
