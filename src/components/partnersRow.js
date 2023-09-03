import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
const PartnersRow = () => {
    const partners = [
        { label: "LoopiPay", herf: "#" },
        { label: "Ola Finance", herf: "#" },
        { label: "TradingView", herf: "#" },
        { label: "Gelato Network", herf: "#" },
        { label: "Router Protocol", herf: "#" },
        { label: "Unstoppable Domains", herf: "#" },
        { label: "Hacken", herf: "#" },
    ]
    function SwiperList() {
        return (
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                loop={true}
            >
                {partners.map((partner, index) => {
                    return (
                        <SwiperSlide>
                            <a href={partner.herf} className="text-xl" target="_blank" rel="noopener noreferrer nofollow">{partner.label}</a><br />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )
    }
    return (
        <>
            <div className="relative mt-24">
                <div className="rotate-[6.08deg] partners-grid-1 h-20 w-full flex flex-wrap justify-between items-center text-white font-bold font-[Inter] z-10">
                    <SwiperList />
                </div>
                <div className="rotate-[-4.41deg] h-20 bg-[#471443] dark:bg-[#636715] w-full flex flex-wrap justify-between items-center text-white font-bold font-[Inter] absolute top-0 left-0 z-20">
                    <SwiperList />
                </div>
            </div>
        </>
    )
}
export default PartnersRow;