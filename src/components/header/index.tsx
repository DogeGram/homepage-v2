import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Aws from '@/constants/svg/aws.svg';
import Twemoji from '@/components/Twemoji'
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h2 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        The user-funded social media
      <h2 className={tw(`font-sans font-bold text-transparent text-4xl md:text-5xl lg:text-8xl text-center lg:leading-tight bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 via-yellow-500 animate-gradient-x`)}>
         Dogegram!
      </h2>
      </h2>
      <div className={tw(`max-w-xl mx-auto`)}>
      <p className={tw(`mt-10 font-bold text-gray-500 text-center text-xl lg:text-3xl`)}>
         
      </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary url="https://app.dogegram.xyz/signup">Let's Sign Up!</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Hosted on</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
