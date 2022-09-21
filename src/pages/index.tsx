import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Dogegram"
        description="A new, sleek and noice social media platform!"
      />
      <script defer data-domain="dogegram.xyz" src="https://findings.dogegram.xyz/js/findings.js"></script>
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
