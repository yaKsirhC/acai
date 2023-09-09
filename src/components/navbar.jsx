import { useEffect, useState } from 'react';
import LogoDark from '../assets/logo/acaiswap-dark.png';
import Logo from '../assets/logo/image22.png';
import ToggleSwitch from './toggleSwitch';
import { setToogleSwitch } from './darktheme';
import { Link } from 'react-scroll';
import qrcode from '../assets/png/QRcode.png';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { isDark, toggleTheme,theme } = setToogleSwitch();
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const tabs = [
        { label: 'Home', link: '#Home' },
        { label: 'Roadmap', link: '#Roadmap' },
        { label: 'Tokenomics', link: '#Tokenomics' },
        { label: 'Team', link: '#Team' },
        { label: 'Partners', link: '#Partners' },
        { label: 'Blockchain', link: '#Blockchain' },
        { label: 'Press', link: '#Press-id' },
        { label: 'Contact us', link: '#Contact us' },
       
    ];

    return (
        <div className='h-[66px] w-full z-50 top-0 bg-[#1E1E1E] sticky'>
            <nav className="flex justify-between items-center py-3 mx-8 text-white">
                <div className='flex'>
                <div className="logo mr-1">
                    <img src={LogoDark} className="h-12 w-30 logoimg" />
                    <img src={Logo} className="h-12 w-30 logoimg-dark" alt="" />
                </div>
                <div className="flex  justify-center items-center font-[outfit]">
                    {tabs.map((tab, index) => (
                        <Link
                            to={tab.label}
                            key={index}
                            href={tab.link}
                            smooth={true}
                            className={`navbar-color font-bold md:text-[12px] lg:text-[14px] hover:text-[#7c4d78] dark:hover:text-[#B6BA64] mx-[22px] ${activeTab === index ? 'border-b-2  border-[#8E5E8A] dark:border-[#B6BA64] !text-[#8E5E8A] dark:text-[#B6BA64]' : ''
                                }`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </Link>
                    ))}
                    <a href="https://whitepaper.acaiswap.finance/"  target="_blank" rel="noopener noreferrer" className={`font-bold navbar-color md:text-[12px] lg:text-[14px] hover:text-[#7c4d78] dark:hover:text-[#B6BA64] mx-[22px] ${activeTab === 6 ? 'border-b-2  border-[#8E5E8A] dark:border-[#B6BA64] !text-[#8E5E8A] dark:text-[#B6BA64]' : ''
                        }`}
                        onClick={() => setActiveTab(6)}>White paper</a>
                </div>
                </div>
                <div className='flex  justify-center items-center font-[outfit]'>
                    <a className={`text-[#8e8e8e] text-[16px] font-bold hover:text-[#7c4d78] dark:hover:text-[#B6BA64] mx-auto cursor-pointer flex justify-evenly`}>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' className='h-[24px]' />
                        </div>
                        <div className='my-auto pl-1'>
                            <svg width="9" height="9" viewBox="0 0 7 7" fill="#8e8e8e" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.979177 0.979187L3.50001 4.76044L6.02084 0.979187L6.70834 1.43752L3.50001 6.25002L0.291677 1.43752L0.979177 0.979187Z" fill="#8e8e8e" />
                            </svg>
                        </div>
                    </a>
                    <div className='mx-3'>
                        <ToggleSwitch />
                    </div>
                    <div className=' ml-3 pop'>
                        <a href='#'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.91669 4.41669V6.91669H4.41669V4.41669H6.91669ZM8.16669 3.16669H3.16669V8.16669H8.16669V3.16669ZM6.91669 11.0834V13.5834H4.41669V11.0834H6.91669ZM8.16669 9.83335H3.16669V14.8334H8.16669V9.83335ZM13.5834 4.41669V6.91669H11.0834V4.41669H13.5834ZM14.8334 3.16669H9.83335V8.16669H14.8334V3.16669ZM9.83335 9.83335H11.0834V11.0834H9.83335V9.83335ZM11.0834 11.0834H12.3334V12.3334H11.0834V11.0834ZM12.3334 9.83335H13.5834V11.0834H12.3334V9.83335ZM9.83335 12.3334H11.0834V13.5834H9.83335V12.3334ZM11.0834 13.5834H12.3334V14.8334H11.0834V13.5834ZM12.3334 12.3334H13.5834V13.5834H12.3334V12.3334ZM13.5834 11.0834H14.8334V12.3334H13.5834V11.0834ZM13.5834 13.5834H14.8334V14.8334H13.5834V13.5834ZM16.5 4.83335C16.0417 4.83335 15.6667 4.45835 15.6667 4.00002V2.33335H14C13.5417 2.33335 13.1667 1.95835 13.1667 1.50002C13.1667 1.04169 13.5417 0.666687 14 0.666687H16.5C16.9584 0.666687 17.3334 1.04169 17.3334 1.50002V4.00002C17.3334 4.45835 16.9584 4.83335 16.5 4.83335ZM17.3334 16.5V14C17.3334 13.5417 16.9584 13.1667 16.5 13.1667C16.0417 13.1667 15.6667 13.5417 15.6667 14V15.6667H14C13.5417 15.6667 13.1667 16.0417 13.1667 16.5C13.1667 16.9584 13.5417 17.3334 14 17.3334H16.5C16.9584 17.3334 17.3334 16.9584 17.3334 16.5ZM1.50002 17.3334H4.00002C4.45835 17.3334 4.83335 16.9584 4.83335 16.5C4.83335 16.0417 4.45835 15.6667 4.00002 15.6667H2.33335V14C2.33335 13.5417 1.95835 13.1667 1.50002 13.1667C1.04169 13.1667 0.666687 13.5417 0.666687 14V16.5C0.666687 16.9584 1.04169 17.3334 1.50002 17.3334ZM0.666687 1.50002V4.00002C0.666687 4.45835 1.04169 4.83335 1.50002 4.83335C1.95835 4.83335 2.33335 4.45835 2.33335 4.00002V2.33335H4.00002C4.45835 2.33335 4.83335 1.95835 4.83335 1.50002C4.83335 1.04169 4.45835 0.666687 4.00002 0.666687H1.50002C1.04169 0.666687 0.666687 1.04169 0.666687 1.50002Z" fill="white" />
                            </svg>
                        </a>
                        <div className='!h-[150px] p-2 !w-[150px] bg-[#313131] absolute right-[110px] top-[55px] rounded-lg popdown'>
                            <img src={qrcode} alt="" />

                        </div>
                    </div>
                    <a href='https://acaiswap.finance/' target="_blank" rel="noopener noreferrer">
                    <button  className="bg-[#8E5E8A] dark:bg-[#B6BA64] px-[20px] flex items-center text-black py-[6px] rounded-full text-[16px] hover:bg-[#7c4d78]">
                        Enter App
                    </button>
                    </a>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;
