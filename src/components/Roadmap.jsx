import React from "react";
import Line from "../assets/png/Frame4.png";
import LineDark from "../assets/png/Frame41.png";
import tick from "../assets/png/Vector.png";
import circle from "../assets/png/Ellipse5.png";
import circleDark from "../assets/png/Ellipse51.png";

function Roadmap() {
  return (
    <div className="flex roadmap justify-center relative gap-8 mt-[58px]">
      <div className="">
        <div className="rounded-lg ml-[140px] mt-[620px] h-[240px] bg-[#8E5E8A] dark:bg-[#1E1E1E]">
          <h1 className="text-[24px] text-white font-bold">PHASE 2:</h1>
          {/* <h3 className='mb-[12px] text-[#471443] dark:text-[#B6BA64] font-bold'>(Q1-2023)</h3> */}
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">Lottery</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">NFT store</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Add more blockchains compatibility on DEX.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Panel to visualize stats, liquidity, trading, volumes.
            </p>
          </div>
        </div>
        <div className="rounded-lg ml-[140px] mt-[485px] h-[342px] bg-[#8E5E8A] dark:bg-[#1E1E1E] mb-[80px]">
          <h1 className="text-[24px] text-white font-bold">PHASE 4:</h1>
          {/* <h3 className='mb-[12px] text-[#471443] dark:text-[#B6BA64] font-bold'>(Q3-2023)</h3> */}
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">Launchpad.</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Trading competition
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Add more blockchains compatibility on DEX.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Launch mobile APP of DEX to use on Android and iOS phones
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              NFT-Fi – User locks his NFT on DEX and borrows an amount of money
              from DEX or other users.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              LeN – Provided by Ola Finance
            </p>
          </div>
        </div>
      </div>
      <div className="line absolute top-0 bottom-0  bg-white">
        <div className="plz sticky bg-[#8E5E8A]"></div>
      </div>
      <div className="">
        <div className="rounded-lg ml-[34px] p-[29px] h-[598px] bg-[#8E5E8A] dark:bg-[#1E1E1E]">
          <h1 className="text-[24px] text-white font-bold">PHASE 1:</h1>
          {/* <h3 className='mb-[12px] text-[#471443] dark:text-[#B6BA64] font-bold'>(Q3-Q4/2023)</h3> */}
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Bridge – Provided by Stargate Finance
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">Token Stake</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              IFO (Initial FARM Offer)
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Limit Order – Provided by Gelato Network
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Lightweight graphics/widget – Provided by TradingView
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Connect on DEX with 9 different wallets.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Real time token visualization with marks/markup – Provided by
              TradingView
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Compatibility with unstoppable domains and ENS domains.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Cross Chain Swap – Provided by Router Protocol
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Buy crypto using credit card/PIX – Provided by
              LoopiPay/MoonPay/Ramp
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Token swap basic/advanced/expert on: BSC, Polygon, Ethereum,
              Solana and Fantom.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Create liquidity pools using: 2, 3 or 4+ different tokens until 10
              different tokens
            </p>
          </div>
        </div>
        <div className="rounded-lg mt-[350px] ml-[34px] h-[360px] bg-[#8E5E8A] dark:bg-[#1E1E1E]">
          <h1 className="text-[24px] text-white font-bold">PHASE 3:</h1>
          {/* <h3 className='mb-[12px] text-[#471443] dark:text-[#B6BA64] font-bold'>(Q2-2023)</h3> */}
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">NFT Stake.</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">P2P trade/swap</p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Add more blockchains compatibility on DEX.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Single Sided Liquidity Pool with Impermanent Loss Insurance.
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Trade tokens accessible through the DEX – Provided by TradingView
            </p>
          </div>
          <div className="flex text-white items-center mb-[5.5px]">
            <img className="m-[8px]" src={tick} alt="" />
            <p className="text-[16px] ml-[5px] font-[500] ">
              Security analysis: token contract scan, rug pull, honeypot,
              monitor wallets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
