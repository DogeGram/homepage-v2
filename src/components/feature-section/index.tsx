import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            How we change the game for creators and businesses!
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Notifications Up!</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Someone just you in a comment or a post, but you never got a chance to ever view it? sad but not here. 
              We notify when you whenever someone mentions you in a post or comment, yay!
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Payments</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
               Make it easy for people to support you as you share! With Dogegram Payments, with the lowest fees ever. Just 90 paise
               for transactions under ₹80 and 2% above that (excluding stripe fees)
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Unlimited Growth!</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We will automaticly select accounts with verified or/and creator badges to show in recommended users' list, 
              so your follower-base increases and everybody gets what they want, yay! 
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Creator's Badge!</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Creators with more than just 100 followers (yes, just 100 subs required) get a special badge linking to
              their youtube channel page!
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Modern platform</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              A sleek, fast and noice platform made by us for the world to use and make more productive things, 
              inspired by the current market needs. 
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Privacy</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              We you don't track you as you go around the web browsing things nor do we even if you are on our 
              platfrom. (partly because bigdata is big xD)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
