import Marquee from "react-fast-marquee";
import polygon from "../assets/img/blockchains/polygon.svg"
import bnbChain from "../assets/img/blockchains/bnb-chain.svg"
import thorchain from "../assets/img/blockchains/thorchain.jpg"
import tron from "../assets/img/blockchains/tron.jpg"
import ethereum from "../assets/img/blockchains/ethereum.svg"
import solana from "../assets/img/blockchains/solana.svg"
import okx from "../assets/img/blockchains/okx.svg"
import fantom from "../assets/img/blockchains/fantom.png"
import c from "../assets/img/blockchains/IMG_8857.JPG"
import celo from "../assets/img/blockchains/IMG_8859.jpg"
import sun from "../assets/img/blockchains/IMG_8866.jpg"
import arbitrum from "../assets/img/blockchains/IMG_8867.jpg"
import fuse from "../assets/img/blockchains/IMG_8869.JPG"
import op from "../assets/img/blockchains/IMG_8870.jpg"
import telos from "../assets/img/blockchains/IMG_8872.jpg"
import okex from "../assets/img/blockchains/IMG_8873.PNG"
import klaytn from "../assets/img/blockchains/IMG_8874.JPG"
import palm from "../assets/img/blockchains/IMG_8875.JPG"
import near from "../assets/img/blockchains/IMG_8877.PNG"
import heco from "../assets/img/blockchains/IMG_8878.PNG"
import g from "../assets/img/blockchains/IMG_8860.jpg"
const BlockchainCard = () => {
    return (
        <>
            <div className="w-full my-8">
                <Marquee speed={150} gradientColor="" pauseOnClick={true}>
                    <div className="flex flex-row items-center dark:bg-[#B6BA64] bg-[#8E5E8A] py-[28px] h-[169px]  justify-between gap-4">
                        <div className=""><img src={thorchain} className="w-auto h-full" /></div>
                        <div><img src={ethereum} className="w-auto h-full" /></div>
                        <div><img src={bnbChain} className="w-auto h-full" /></div>
                        <div><img src={polygon} className="w-auto h-full" /></div>
                        <div><img src={solana} className="w-auto h-full" /></div>
                        <div><img src={okx} className="w-auto h-full" /></div>
                        <div><img src={fantom} className="w-auto h-full" /></div>
                        <div className=" "><img src={tron} className="w-auto h-full" /></div>
                        <div><img src={c} className="w-[186px] h-[139px]" /></div>
                        <div><img src={celo} className="w-[186px] h-[139px]" /></div>
                        <div><img src={sun} className="w-[186px] h-[139px]" /></div>
                        <div><img src={arbitrum} className="w-[186px] h-[139px]" /></div>
                        <div><img src={fuse} className="w-[186px] h-[139px]" /></div>
                        <div><img src={op} className="w-[186px] h-[139px]" /></div>
                        <div><img src={telos} className="w-[186px] h-[139px]" /></div>
                        <div><img src={okex} className="w-[196px] h-[139px]" /></div>
                        <div><img src={klaytn} className="w-[196px] h-[139px]" /></div>
                        <div><img src={palm} className="w-[196px] h-[139px]" /></div>
                        <div><img src={near} className="w-[186px] h-[139px]" /></div>
                        <div><img src={heco} className="w-[196px] h-[139px]" /></div>
                        <div><img src={g} className="w-[186px] h-[139px]" /></div>
                        <div></div>
                    </div>

                </Marquee>
            </div>
        </>
    )
}
export default BlockchainCard;