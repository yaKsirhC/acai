import React, { useState } from "react";
import Polygon1 from "../assets/png/Polygon12.png";
import Polygon2 from "../assets/png/Polygon13.png";
import Polygon3 from "../assets/png/Polygon25.png";
import Polygon4 from "../assets/png/Polygon4.png";
import Polygon5 from "../assets/png/dark.png";
import Polygon6 from "../assets/png/gold.png";
import Vector from "../assets/png/Vector1.png";
import Vector2 from "../assets/png/darkVector.png";
import Vector3 from "../assets/png/goldVector.png";
import img1 from "../assets/png/1678633998215 1.png";
import img2 from "../assets/png/1678785401305 1.png";
import img3 from "../assets/png/1678633998179 2.png";
import img4 from "../assets/png/1678633998143 1.png";
import img5 from "../assets/png/1678633997883 1.png";
import img6 from "../assets/png/1678633998071 1.png";
import img7 from "../assets/png/1678633998034 1.png";
import img8 from "../assets/png/bi_rocket-takeoff-fill.png";
import img9 from "../assets/png/1678785077831 1.png";
import img10 from "../assets/png/1678633997998 1.png";
import img11 from "../assets/png/1678633997922 1.png";
import img12 from "../assets/png/1678633997883 1.png";
import img13 from "../assets/png/1678785077954 1.png";
import img14 from "../assets/png/1678785077917 1.png";
import img15 from "../assets/png/1678786221464 1.png";
import img16 from "../assets/png/20230410_200616 1.png";
import img17 from "../assets/png/20230410_200701 1.png";
import img18 from "../assets/png/20230410_200523 1.png";
import img19 from "../assets/png/20230410_200401 1.png";
import img20 from "../assets/png/20230410_203442 1.png";
import img21 from "../assets/png/20230410_200235 1.png";
import img22 from "../assets/png/20230410_201044 1.png";
import logo from "../assets/png/IMG_8830 1.png";

function HoneyComb() {
  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const [polygon, setPolygon] = useState(Polygon3);
  const [triangle, setTriangle] = useState(Vector);
  const [color, setColor] = useState(true);

  const setWords = (heading, text, theme) => {
    setHeading(heading);
    setText(text);
    if (theme === "light") {
      setPolygon(Polygon3);
      setTriangle(Vector);
      setColor(true);
    } else if (theme === "dark") {
      setPolygon(Polygon5);
      setTriangle(Vector2);
      setColor(false);
    } else {
      setPolygon(Polygon6);
      setTriangle(Vector3);
      setColor(true);
    }
  };
  return (
    <div className="awful flex flex-col">
      <div className="relative">
        <img className="w-[408px] h-[290px]" src={polygon} alt="" />
        <div className="absolute text-menu z-[2] flex flex-col w-[200px]">
          <h1 className={`mb-5 ml-10 font-bold text-xl mx-auto text-center w-[170px] ${color ? "text-[#411B30]" : "text-[#B6BA64]"} `}>{heading}</h1>
          <p className={`text-md font-[500] text-center w-[270px] ${color ? "text-[#411B30]" : "text-[#B6BA64]"} `}>{text}</p>
        </div>
        <img className="hidden w-[396px] h-[269px]" src={triangle} alt="" />
      </div>

      <div className="flex items-center">
        <div className="parent-honey" onMouseEnter={() => setWords("Impermanent loss insurance", "We provide protection to some liquidity pools against impermanent loss,enabling you to profit with transction fees without worry about price fluctuation", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="Polygon1" />
          <img className=" second-abs  left-[995px] font-bold  w-[89px] text-[13px] text-[#411B30] w-[80px] h-[71px]" src={img16} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Peer-to-Peer Buy/Sell", "Buy or sell cryto currency directly from other users at extremely low fees, only using smart contracts technology,no human intervention", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="Polygon2" />
          <img className="second-abs left-[1140px] " src={img1} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Compatibility with UD and ENS", "with our standard technological work of art and expertise. our eco system has been designed in such wonderful way that it will be ENS compatible enabled", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="  second-abs left-[1240px] text-center font-bold  w-[89px] text-[13px] text-[#411B30] w-[80px] h-[71px]" src={img22} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Liquidity", "Our smart contracts allow you to provide liquidity creating pools with until 10 different tokens/coins, enabling you to collect fees from 90 different swap permutations when someone use your pool.", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className=" second-abs" src={img2} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Swap", "Here you can swap in basic, advanced and expert mode,however, we keep it simple and straight-forward.Allowing you to achieve the best experience without making things complicated", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img3} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Farm", "You can create liquidity pools to farm tokens from other projects/partners or our own token, increasing your amount without effort and in a safe way.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img4} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Stake", "Here you can stake your acai tokens and gain benefits like NFT, exclusive access to our merch, e.t.c", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img5} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Bridge", "Send tokens across diffrent blockchain with the help of our partner Stargate Finance,without additional fees,Peace of mind when bridging funds.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img6} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("DYOR Tools", "Set of tools provided by us to help the community to do their own research about crypto projects, making it easier to reveal a potential scam projects.", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="second-abs left-[1420px] font-bold  w-[89px] text-[15px] text-[#411B30] w-[70px] h-[65px]" src={img18} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("NFTFI", "Using this service our community can get instant liquidity using their NFT assests as collateral in minutes without comlicated steps.", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="second-abs" src={img7} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Launchpad", "You can launch your project with our launchpad and benefit from all our partners, making it easier and cheaper than all other launchpads out there. Give it a try!", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs " src={img8} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Golden Acai", "This is an unique NFT collection,that will grant whitelist,prizes,and a lot of other benefits to its owners.Only 100 available,stay tuned.", "gold")}>
          <img className=" w-[110px] h-[111px]" src={Polygon4} alt="" />
          <img className="second-abs w-[68px] h-[56px]" src={logo} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Lottery", "Buy tickets and participate in our lottery, daily prizes. Have you ever won a jackpot?", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img9} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Lending and Borrowing", "Lending and Borrowing system built by our partner Ola Finance. Now it become easy to match a lender to a borrower.", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className=" second-abs left-[1365px] font-bold text-center   text-[15px] text-[#411B30] w-[80px] h-[71px]" src={img17} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("GameFi", "Bringing innovation to our community, we offer a new and different way to invest, and profit based only in your skills and strategy. Forget about market and price fluctuation. Welcome to the real FUN!", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="second-abs" src={img10} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Trading competition", "Compete with other teams for the highest trading volume and win awesome prizes in the end of the competition. Don’t forget to join a team.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img11} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Limit Order", "Automate trade actions based in your strategy using smart contract technology provided by our partner Gelato Network.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs" src={img12} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Cross-chain Swap", "Execute a cross-chain swap easy and safe using the service provided by our partner Router Protocol, without additional fees", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className="second-abs font-bold text-center w-[89px] text-[15px] text-[#B6BA64] w-[80px] h-[71px]" src={img21} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Initial Farm Offer", "Join the IFO of new projects to buy tokens at the best price. It is simple and can be profitable.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="" />
          <img className=" second-abs left-[1300px] text-center font-bold text-[15px] text-[#B6BA64] w-[80px] h-[81px]" src={img19} />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Trade", "Enjoy a complete and full featured trade platform provided by our partner TradingView! Yes, we only offer the best to our community..", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="second-abs" src={img13} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Fiat", "Buy crypto using fiat and vice-versa never was so easy. Enjoy this service without additional fees, provided by our partners: LoopiPay and RAMP.", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="Polygon1" />
          <img className="second-abs" src={img14} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("NFT", "We are developing some NFT collections to empower our community, providing new ways of achieving profit without unnecessary exposure to additional risks. Keep an eye on it and don’t miss our collections for sale.", "dark")}>
          <img className=" w-[110px] h-[111px]" src={Polygon2} alt="Polygon2" />
          <img className="second-abs" src={img15} alt="" />
        </div>
        <div className="parent-honey" onMouseEnter={() => setWords("Single Sided Liquidity Pools", "Enjoy our brand-new LP offer, provide only one token and we provided the other one at the same ratio. Don't miss it, only 100 slots available", "light")}>
          <img className=" w-[110px] h-[111px]" src={Polygon1} alt="" />
          <img className="second-abs w-[90px] h-[91px]" src={img20} />
        </div>
      </div>
    </div>
  );
}

export default HoneyComb;
