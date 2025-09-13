import { chart1, chart2 } from "../assets";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function FeaturedPage() {
  return (
    <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center">
      <div className="mb-[8px] lg:pr-[950px]">
        <div className="flex flex-col mt-[55px]">
          <div>
            <h2 className="text-[#000000] text-[30.857px] sm:text-[38px] font-semibold select-none text-center lg:text-start">
              交安指標報表
            </h2>
          </div>
          <div>
            <h3 className="text-[#006794] text-[19.25px] sm:text-[22px] font-semibold select-none text-center lg:text-start">
              Traffic Safety Analysis Report
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center py-[30px] px-[50px] gap-[60px]">
        <Zoom className="cursor-pointer">
          <img
            src={chart1}
            alt="Chart 1"
            className="w-[338.802px] h-[190.451px] ss:w-[597.88px] ss:h-[336.085px] rounded-[2.5px]"
          />
        </Zoom>
        <Zoom className="cursor-pointer">
          <img
            src={chart2}
            alt="Chart 2"
            className="w-[338.802px] h-[190.451px] ss:w-[597.88px] ss:h-[336.085px] rounded-[2.5px]"
          />
        </Zoom>
      </div>
    </section>
  );
}

FeaturedPage.propTypes = {};
