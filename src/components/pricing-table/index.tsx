import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';


const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Say Hello To Privacy!</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Get ready, and click the sign up button to go check out the social world of ours and have fun! 
            This is free too for you and everybody, yay!
          </p>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-gray-800`)}>If you order now or anytime...</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            $0/Forever
          </div>
          <Button primary modifier="mt-6" url={'https://app.dogegram.xyz/signup'}>
            Sign up!
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
