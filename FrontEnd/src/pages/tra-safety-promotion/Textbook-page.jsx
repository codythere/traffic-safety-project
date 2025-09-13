import { useEffect } from "react";
import {
  textbook1,
  textbook2,
  textbook3,
  textbook4,
  textbook5,
} from "../../assets";

export default function TextbookPage() {
  useEffect(() => {});

  return (
    <>
      <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center mb-[30px]">
        <div className="mb-[32px] lg:pr-[840px]">
          <div className="flex flex-col mt-[55px]">
            <div>
              <h2 className="text-[#000000] text-[29.16px] sm:text-[34.02px] font-semibold select-none text-center lg:text-start">
                交安主題式宣導教材
              </h2>
            </div>
            <div>
              <h3 className="text-[#006794] text-[18.856px] sm:text-[22px] font-semibold select-none text-center lg:text-start">
                Textbook of Traffic Safety
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center pb-[10px] px-[50px] gap-[70px] lg:gap-[70px]">
          <a
            href="https://168.motc.gov.tw/theme/weather/post/2011271847026/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={textbook1}
              alt="textbook 1"
              className="w-[239.3px] h-[168.940px] xs:w-[358.732px] xs:h-[253.26px] ss:w-[538.1px] ss:h-[379.893px] rounded-[2.5px]"
            />
          </a>
          <a
            href="https://168.motc.gov.tw/theme/weather/post/2008051627338/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={textbook2}
              alt="textbook 2"
              className="w-[239.3px] h-[168.940px] xs:w-[358.732px] xs:h-[253.26px] ss:w-[538.1px] ss:h-[379.893px] rounded-[2.5px]"
            />
          </a>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center mt-[70px] lg:mt-[50px] pb-[40px] px-[50px] gap-[70px] lg:gap-[35px]">
          <a
            href="https://168.motc.gov.tw/theme/fullsized/post/1907241208035"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={textbook3}
              alt="textbook 3"
              className="w-[239.3px] h-[143.58px] xs:w-[358.732px] xs:h-[215.232px] ss:w-[538.1px] ss:h-[322.86px] lg:w-[358.733px] lg:h-[215.24px] rounded-[2.5px]"
            />
          </a>
          <a
            href="https://168.motc.gov.tw/theme/car/post/1906121100759"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={textbook4}
              alt="textbook 4"
              className="
              w-[239.3px] h-[134.943px] xs:w-[358.732px] xs:w-[201.607px] ss:w-[538.1px] ss:h-[302.68px] lg:w-[358.733px] lg:h-[201.78px] rounded-[2.5px]"
            />
          </a>
          <a
            href="https://168.motc.gov.tw/theme/car/post/1912251128868"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={textbook5}
              alt="textbook 5"
              className="
              w-[239.3px] h-[143.58px] xs:w-[358.732px] xs:h-[215.232px] ss:w-[538.1px] ss:h-[322.86px] lg:w-[358.733px] lg:h-[215.24px] rounded-[2.5px]"
            />
          </a>
        </div>
      </section>
    </>
  );
}

TextbookPage.propTypes = {};
