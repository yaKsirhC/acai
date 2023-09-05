import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const PartnersRow = () => {
  const partners = [
    { label: "LoopiPay", herf: "https://loopipay.com/" },
    { label: "Ola Finance", herf: "https://ola.finance/" },
    { label: "TradingView", herf: "https://tradingview.com/" },
    { label: "Gelato Network", herf: "https://www.gelato.network/" },
    { label: "Router Protocol", herf: "https://www.routerprotocol.com/" },
    { label: "Unstoppable Domains", herf: "https://unstoppabledomains.com/" },
    { label: "Hacken", herf: "https://hacken.io/" },
    { label: "Most", herf: "https://most.com.br/" },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-6 px-4">
      {partners.map((partner, index) => {
        return (
            <a href={partner.herf} className="text-xl text-center px-2 py-1 bg-gray-200 rounded-lg text-black snap-center font-semibold" target="_blank" rel="noopener noreferrer nofollow">
              {partner.label}
            </a>
        );
      })}
    </div>
  );
};
export default PartnersRow;
