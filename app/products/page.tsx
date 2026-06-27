import type { Metadata } from 'next';
import { Products } from '@/views/Products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'PMS, payments, distribution, marketing, and intelligence — every product works as one connected platform.',
  alternates: { canonical: '/products' },
};

export default function Page() {
  return <Products />;
}
