import HeroImg from "../assets/svg/hero.svg";
import LandingHeroCard from "../components/landing-hero-card";
import LandingTokenomicsCard from "../components/landing-tokenomics-card";
import TokenDistributionSvg from "../assets/svg/token-distribution-visual.svg";
import TokenDistributionSvgDark from "../assets/svg/Token-distribution-dark.png";
import TypingAnimation from "../components/typing-animation";
import TokenDistributionCard from "../components/token-distribution-card";
import TeamCard from "../components/teamCard";
import PartnersRow from "../components/partnersRow";
import HoneyComb from "../components/HoneyComb";
import Roadmap from "../components/Roadmap";
import BlockchainCard from "../components/blockchainCard";
import cryptoDecoration from "../assets/svg/crypto-decoration.svg";
import ContactUs from "../components/contact-us";
import Footer from "../components/footer";
import TrendingNewsCards from "../components/trendingNewsCard";
import { setToogleSwitch } from "../components/darktheme";
import light1 from "../assets/png/Ellipse1.png";
import light2 from "../assets/png/Ellipse2.png";
import light3 from "../assets/png/Ellipse6.png";
import light4 from "../assets/png/Ellipse7.png";

import { useEffect, useState } from "react";
import TokenImg from "../components/TokenImg";
import TokenImgDark from "../components/TokenImgDark";
import TrendingNews from "../components/TrendingNews";
import Press from "../components/Press";
const LandingPage = () => {
  const { isDark, toggleTheme, theme } = setToogleSwitch();
  // const [tokenimg, setTokenimg] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //     if(theme === "dark"){
  //         setTokenimg(TokenDistributionSvgDark);
  //     }else{
  //         setTokenimg(TokenDistributionSvg);
  //     }
  // })

  return (
    <div className=" bg-[#1E1E1E] plz-be-over pt-[60px] dark:bg-[#fdfbea]">
      {/* Section - Hero */}
      <div className="grid grid-cols-2" id="Home" >
        <div className="col-span-1 font-[inter]">
          <div className="ml-24 mt-24">
            <h1 className="text-[40px] text-white dark:text-black font-semibold">
              Your brand new{" "}
              <span className="text-[#E03D3D]">
                <TypingAnimation sequence={["DeFi", 2000, "NFTFi", 2000, "GameFi", 3000]} />
              </span>{" "}
              <br />
              on a multi-chain ecosystem
            </h1>
            <p className="mr-16 mt-4 text-white dark:text-black text-[18px]">
              We support our community providing new ways to manage assets, invest and profit. <br />
              Now you can earn based on strategy, creativity and other skills. Join us and enjoy a whole new world full of opportunities with more diversity and less fees!
            </p>
            <div className="flex gap-8 my-6">
              <a href="https://acaiswap.finance/" target="_blank">
                <button className="text-white p-3 px-10 rounded-full bg-gradient-to-r from-[#8E5E8A] to-[#471443]/50 dark:from-[#B6BA64] dark:to-[#636715]">Enter App</button>
              </a>
              <a href="https://whitepaper.acaiswap.finance/" target="_blank">
                <button className="border text-[#976b93] dark:text-[#B6BA64] border-[#956891] dark:border-[#B6BA64] p-3 px-10 rounded-full hover:text-white hover:border-[#976b93]">Read Doc</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-8">
            <img className="absolute top-[27px] right-0 w-[350px] bg-light" src={light1} alt="" />
            <img className="absolute top-[507px] left-0 bg-light" src={light2} alt="" />
            <img className="absolute top-[1287px] right-0 w-[350px] bg-light" src={light1} alt="" />
            <img className="absolute top-[1755px] left-0" src={light3} alt="" />
            <img className="absolute top-[2484px] right-0" src={light4} alt="" />
            <img className="absolute top-[27px] right-0 w-[350px] bg-dark" src={light4} alt="" />
            <img className="absolute top-[507px] left-0 bg-dark" src={light3} alt="" />
            <img className="absolute top-[1287px] right-0 w-[350px] bg-dark" src={light4} alt="" />
            <div className="w-full flex justify-start pl-36">
              <img src={HeroImg} alt="" className="h-[25rem] relative right-6" />
            </div>
            <p className="hero-paragraph text-[18px] pt-16 mr-20 font-[inter]">AçaíSwap was born in Brazil, inspired in the largest rainforest in the world: Amazon! With that in mind, AçaíSwap brings to its community a completely new range of opportunities in DeFi, joining benefits, incentives, and new ways of investment. Take a tour through our website and discover all the exciting news waiting for you!</p>
          </div>
        </div>
      </div>

      {/* Section - Hero-slider */}
      <div className="flex w-full">
        <LandingHeroCard />
      </div>

      {/* Section - Product and Features */}
      <div className="flex flex-col font-[Inter]">
        <div className="my-3 ">
          <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Product and Features</h1>
          <p className="pt-3 text-white dark:text-black text-[18px] mr-72">Here you check what is waiting for you in our ecosystem. Hover the mouse through the icons on the right to read a brief explanation of each one</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <HoneyComb />
        </div>
      </div>

      {/* Section - Roadmap */}
      <div className="flex flex-col justify-center items-center w-screen" id="Roadmap">
        <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[34px] font-bold">ROADMAP</h1>
        <p className="text-white font-medium font-[Inter]">Here you can follow our entire journey including project updates and releases.</p>
      </div>
      <div className="flex items-center h-auto justify-center gap-4">
        <Roadmap />
      </div>

      {/* Section - Tokenomics */}
      <div className="grid grid-cols-2 mt-12 ml-24 font-[Inter]" id="Tokenomics">
        <div className="my-3 ">
          <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Tokenomics</h1>
          <p className="pt-3 text-white dark:text-black text-[18px] mr-80">
            Here you can see our economic distribution and <br /> details about our token
          </p>
        </div>
        <div></div>
      </div>
      <div className="flex items-center h-auto justify-center gap-4">
        <LandingTokenomicsCard />
      </div>

      {/* Section - Token Distribution */}
      <div className="flex flex-col justify-center items-center w-screen my-12">
        <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[24px] font-bold my-8">Token Distribution</h1>
        <div className="grid grid-cols-2 gap-0 w-full">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img className="token-distribution w-[850px]" src={TokenDistributionSvg} alt="Token Distribution" />
            <img className="token-distribution-dark w-[850px]" src={TokenDistributionSvgDark} alt="" />
            <p className="text-white dark:text-black font-semibold flex">
              <picture className=" h-[20px]">
                <source className="" srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp" type="image/webp" />
                <img className=" !h-[20px]" src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥" width="32" height="32" />
              </picture>
              <span className="">a. Burn 100.000.000 tokens per year in the 4 initial years. Buy back and burn</span>
            </p>
            <br className="mb-2" />
            <p className="text-white font-semibold ml-6">b. We don’t have token allocation for: Reserve, Advisors, Team, Investors, Partners</p>
          </div>

          <div className="mr-36">
            <TokenDistributionCard />
          </div>
        </div>
      </div>

      {/* Section - Team */}
      <div className="mx-24 my-12 pb-24" id="Team">
        <div className="grid grid-cols-2 font-[Inter]">
          <div className="my-3 ">
            <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Team</h1>
            <p className="pt-3 text-white dark:text-black text-[18px] mr-80">These are the brave who joined us to make this project possible</p>
          </div>
          <div></div>
        </div>
        <TeamCard />
      </div>

      {/* Section - Partners */}
      <div className="pb-24 w-full" id="Partners">
        <div className="mx-24 my-12">
          <div className="grid grid-cols-2 font-[Inter]">
            <div className="my-3 ">
              <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Partners</h1>
              <p className="pt-3 text-white dark:text-black text-[18px] mr-64">These are our most notable partners. Helping on achieving changing the world!</p>
            </div>
            <div></div>
          </div>
        </div>
        <PartnersRow />
      </div>
      {/* Section - Blockchains */}
      <div className="pb-24" id="Blockchain">
        <div className="mt-24 mx-24">
          <div className="grid grid-cols-2 font-[Inter]">
            <div className="my-3 ">
              <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Blockchains</h1>
              <p className="pt-3 text-white dark:text-black text-[18px] mr-64">Here you can see all blockchains we will operate</p>
            </div>
            <div></div>
          </div>
        </div>
        <BlockchainCard />
      </div>

      {/* Section - decoration-img */}
      <div className="flex flex-col justify-center items-center">
        <img src={cryptoDecoration} className="h-[518px] w-[842px]" />
      </div>

      {/* Section - Contact us */}
      <div className="flex flex-col justify-center items-center my-12" id="Contact us">
        <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[34px] font-bold">Contact Us</h1>
        <p className="text-white dark:text-black font-medium font-[Inter]">Partnerships, ideas, suggestions and more!</p>
        <div className="pt-6">
          <ContactUs />
        </div>
      </div>

      {/* Section - Trending News */}
      <div className="pb-24 my-16 w-full" id="Press-id">
        <div className="mx-24 my-12">
          <div className="grid grid-cols-2 font-[Inter]">
            <div className="my-3 ">
              <h1 className="text-[#8E5E8A] dark:text-[#B6BA64] text-[28px] font-bold">Featured on</h1>
            </div>
            <div></div>
          </div>
          <Press />
        </div>
      </div>

      {/* Section - Join our community */}
      <div className="flex flex-col justify-center items-center my-12 font-[Inter]">
        <div className="w-[800px] bg-[#161616] p-12 rounded-3xl flex justify-center items-center text-white flex-col gap-3">
          <h1 className="font-bold text-3xl">Join our community</h1>
          <p className="text-center">Join our community on discord and keep updated with news, contests and much more!</p>
          <a href="#" target={"_blank"} rel="noopener noreferrer nofollow" className="pt-2">
            <button className="bg-[#5865F2] hover:bg-[#5865f2cc] px-8 py-4 flex items-center gap-3 rounded-full text-lg">
              Launch Discord
              <svg width="23" height="18" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.9771 1.00498C12.909 0.535494 11.7669 0.194272 10.573 0C10.4263 0.249066 10.255 0.584059 10.1369 0.850559C8.86771 0.671234 7.61014 0.671234 6.36429 0.850559C6.24621 0.584059 6.07097 0.249066 5.92307 0C4.7278 0.194272 3.58445 0.536739 2.51638 1.00747C0.362068 4.06601 -0.221933 7.0486 0.0700677 9.9888C1.49892 10.9913 2.88365 11.6002 4.24502 11.9987C4.58115 11.5641 4.88093 11.1021 5.1392 10.6152C4.64734 10.4396 4.17624 10.2229 3.7311 9.97135C3.8492 9.8892 3.9647 9.80325 4.07631 9.71485C6.79129 10.9078 9.74111 10.9078 12.4237 9.71485C12.5365 9.80325 12.652 9.8892 12.7688 9.97135C12.3224 10.2241 11.85 10.4408 11.3581 10.6164C11.6164 11.1021 11.9149 11.5654 12.2523 12C13.615 11.6015 15.001 10.9925 16.4299 9.9888C16.7725 6.58035 15.8446 3.62516 13.9771 1.00498ZM5.50906 8.1806C4.69406 8.1806 4.0257 7.46575 4.0257 6.59529C4.0257 5.72479 4.67978 5.00874 5.50906 5.00874C6.33835 5.00874 7.00668 5.72354 6.99241 6.59529C6.99374 7.46575 6.33835 8.1806 5.50906 8.1806ZM10.9909 8.1806C10.1759 8.1806 9.5075 7.46575 9.5075 6.59529C9.5075 5.72479 10.1616 5.00874 10.9909 5.00874C11.8201 5.00874 12.4885 5.72354 12.4743 6.59529C12.4743 7.46575 11.8201 8.1806 10.9909 8.1806Z"
                  fill="white"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Section - Footer */}
      <div className="bg-[#1E1E1E] dark:drop-shadow-2xl dar dark:bg-white pb-[60px] pt-[12px] mt-64">
        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;
