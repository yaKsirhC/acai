import img1 from '.././assets/png/Rectangle38.png'
import img2 from '.././assets/png/Rectangle37.png'
import img3 from '.././assets/png/Rectangle36.png'

const TrendingNewsCards = () => {
    return(
        <>
        <div className='flex text-white dark:text-black  justify-around mt-[32px]'>
            <div className='max-w-[686px] justify-evenly'>
                <h1 className='text-[34px] font-bold text-white dark:text-black mb-4'>NFT’s are unique, provably scarce, tradeable and usable across multiple applications</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus faucibus libero, ac laoreet ipsum posuere sit amet. Morbi blandit ut tellus commodo lobortis. Phasellus tempor rhoncus purus a dapibus. Aliquam iaculis ac ante accumsan efficitur. Aliquam at tempus felis, vitae elementum est. In lacinia hendrerit erat, eleifend molestie elit elementum id. Curabitur condimentum, lectus sit amet volutpat vulputate, ex sapien finibus nisl, nec sagittis metus nunc ut lorem.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eros risus, tincidunt mollis pharetra nec, dictum id ante. Sed ut erat tempus, bibendum nulla sed, venenatis sem. Inte </p>
                <img className='mt-[21px] w-[202px] h-[148px]' src={img1} alt="" />
                <h1 className='mt-[-80px] ml-[20px] text-[20px] font-semibold w-[182px] dark:text-white'>PI NETWORK TAKING CONTROL</h1>
            </div>
            <div className='flex max-w-[880px] space-x-[50px]'>
                <div>
                    <img className='max-w-[266px] h-[271px] mt-[220px]' src={img2} alt="" />
                    <h1 className='mt-[-140px] ml-[20px] text-[20px] font-semibold w-[182px] dark:text-white'>NFT MARKET CRASHES AND LEAVES MILLIONS OF LOSES!</h1>
                </div>
                <div>
                    <img className='w-[266px] mt-[-40px] h-[245px] ml-[70px]' src={img3} alt="" />
                    <p className='max-w-[329px] text-[16px] mt-[145px]'>inibus nisl, nec sagittis metus nunc ut lorem.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eros risus, tincidunt mollis pharetra nec, dictum id ante. Sed ut erat tempus, bibendum nulla sed, venenatis sem. Inte </p>
                    <h1 className='mt-[-440px] ml-[100px] text-[20px] font-semibold w-[182px] dark:text-white'>New life discovered on another planet!!</h1>
                </div>
            </div>
        </div>
        </>
    )
}
export default TrendingNewsCards;