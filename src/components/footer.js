import FooterLogo from "../assets/logo/footer-logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import LogoDark from "../assets/logo/acaiswap-dark.png";
import Logo from "../assets/logo/image22.png";
const Footer = () => {
  return (
    <>
      {/* Section - Subscribe Newsletter */}
      <div className="flex flex-col justify-center items-center w-screen font-[Inter] pt-[15px]">
        <div className="px-52 w-full">
          <div className="w-full bg-[#8e5e8a] dark:bg-[#B6BA64] p-8 rounded-3xl flex items-center text-white gap-3">
            <div className="flex flex-col gap-2 w-full">
              <h1 className="uppercase font-medium text-xl">Sign up for AçaíSwap newsletter</h1>
              <p className="text-sm">Join our newsletter and receive fast updates directly in your inbox</p>
            </div>
            <div className="flex gap-4 justify-end w-full">
              <form
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input type="email" placeholder="Enter your email" className="text-white placeholder-white p-4 rounded-xl border-[1.5px] border-white bg-transparent focus:outline-none" />
                <button className="ml-4 bg-white p-4 rounded-xl text-[#8e5e8a] hover:bg-[#f1f1f1]">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Section - Footer */}
      <div className="mt-6 mx-24 dark:text-black text-[#c9c9c9]">
        <div className="grid grid-cols-4 font-[Inter]   text-sm pb-6">
          <div className="flex flex-col">
            <div>
              <img src={LogoDark} className="h-12 w-30 logoimg" />
              <img src={Logo} className="h-12 w-30 logoimg-dark" alt="" />
              <a href="https://acaiswap.finance/" target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-[#8e5e8a] font-semibold dark:bg-[#B6BA64] rounded-xl ml-7">Enter App</button>
              </a>
            </div>
            <div className="flex flex-col mt-10 mb-8">
              <p className="text-[15px]">Lorem ipsum dolor sit amet consectetur. Mi nibh venenatis in suscipit turpis enim cursus vulputate amet. Lobortis mi platea aliquam senectus tempus mauris neque.</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[30px] ml-12">
              <h1 className="text-xl font-semibold">Website Links</h1>
              <div className="w-[45px] h-[2px] bg-gray-500  mt-[-20px]"></div>
              <a href="#" className="">
                Home
              </a>
              <a href="#" className="">
                About
              </a>
              <a href="#" className="">
                Get in touch
              </a>
              <a href="#" className="">
                FAQs
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-8 ml-12">
              <h1 className="text-xl font-semibold">Services</h1>
              <div className="w-[45px] h-[2px] bg-gray-500  mt-[-20px]"></div>
              <a href="#" className="">
                Website designing
              </a>
              <a href="#" className="">
                Website Development
              </a>
              <a href="#" className="">
                SEO Services
              </a>
              <a href="#" className="">
                Application Design & <br /> Development
              </a>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-8 ml-12">
              <h1 className="text-xl font-semibold">Languages</h1>
              <div className="w-[45px] h-[2px] bg-gray-500  mt-[-20px]"></div>
              <button href="#" className="w-36 p-2 text-center bg-[#8e5e8a] rounded-lg dark:bg-[#B6BA64]">
                English
              </button>
              <button href="#" className="w-36 p-2 text-left">
                Arabic
              </button>
              <button href="#" className="w-36 p-2 text-left">
                French
              </button>
            </div>
          </div>
        </div>
        <hr className="dark:border-2" />
        <div className="flex justify-between mt-4 tracking-widest mx-3">
          <p>AçaíSwap DeFi 2023 copyright</p>
          <div className="flex gap-6 items-center mt-1">
            <a href="#" target={"_blank"} rel="noopener noreferrer nofollow" className="">
              <FaFacebook className="text-[34px] hover:bg-[#4267B2] dark:hover:bg-[#4267B2] dark:hover:text-[#cbcbcb] p-[6px] bg-[#434343] dark:bg-[#d3d3d3] dark:text-[#434343] rounded-full text-[#cfcfcf]" />
            </a>
            <a href="#" target={"_blank"} rel="noopener noreferrer nofollow">
              <AiFillInstagram className="text-4xl p-[6px] bg-[#434343] hover:bg-[#E1306C] dark:hover:bg-[#E1306C] dark:hover:text-[#cbcbcb] dark:bg-[#d3d3d3] dark:text-[#434343] rounded-full text-[#cfcfcf]" />
            </a>
            <a href="#" target={"_blank"} rel="noopener noreferrer nofollow">
              <FaLinkedin className="text-[34px] p-[6px] hover:bg-[#0077b5] bg-[#434343] dark:hover:bg-[#4267B2] dark:hover:text-[#cbcbcb] dark:bg-[#d3d3d3] dark:text-[#434343] rounded-full text-[#cfcfcf]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
