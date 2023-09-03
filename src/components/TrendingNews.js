import React from 'react'
import img1 from '.././assets/png/Rectangle39.png'
import img2 from '.././assets/png/Rectangle40.png'
import img3 from '.././assets/png/image---2022-11-06t215540.873.jpeg'
import heart from '.././assets/png/mdi_cards-heart-outline.png'
import visible from '.././assets/png/Group4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";

const Card = ({item}) => {
    return(
        <>
        <div style={{backgroundImage: `url(${item.img})`}} className="rounded-lg h-[420px] w-[500px] bg-no-repeat mr-[40px]">
            {/* <img className='' src={img1} alt="" /> */}
            <div className='px-[33px] pb-[38px] pt-[175px]'>
            <p className='text-white text-[10px] mb-[9px]'>{item.date}</p>
            <h1 className=' text-white text-[34px] font-[700] w-[439px] leading-[33px]'>{item.title}</h1>
            <div className=' text-white flex'>
                <div className='flex items-center'>
                <img className='w-[16px] h-[16px] mr-2' src={heart} alt="" />
                <p className='text-[13px]'>{item.like}</p>
                </div>
                <div className='flex items-center ml-3'>
                <img className='w-[16px] h-[11px] mr-2' src={visible} alt="" />
                <p className='text-[13px] mr-1'>{item.view}</p>
                <p className='text-[13px]'>view</p>
                </div>
                

            </div>
            <p className='text-white w-[457px] text-[13px]'>{item.text}</p>
            </div>
        </div>
        </>
    )
}

function TrendingNews() {

    const News = [
        {
            img: img1,
            date: '7 March 2023',
            title: "Signature can ‘thread the needle’ on cutting crypto as silverggate...",
            like: '245',
            view: '245',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus faucibus libero, ac laoreet ipsum posuere sit amet. Morbi blandit ut tellus commodo lobortis. Phasellus tempor rhoncus'
        },
        {
            img: img2,
            date: '7 March 2023',
            title: "Bitcoin Pauses as Crypto Bank Pressures Mount...",
            like: '245',
            view: '245',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus faucibus libero, ac laoreet ipsum posuere sit amet. Morbi blandit ut tellus commodo lobortis. Phasellus tempor rhoncus'
        },
        {
            img: img3,
            date: '7 March 2023',
            title: "Tera ulf start Nuclear- powered Dodge Mining with Nearly 8,000;;;",
            like: '245',
            view: '245',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus faucibus libero, ac laoreet ipsum posuere sit amet. Morbi blandit ut tellus commodo lobortis. Phasellus tempor rhoncus'
        }
        
    ]

  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        // loop={true}
            >
    <div className='flex space-x-12'>
        {News.map((item, index) => {
            return(
                <SwiperSlide>
            <Card item={item} />
            </SwiperSlide>
            )
        })}
        
    </div>
    </Swiper>
  )
}

export default TrendingNews