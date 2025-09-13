import { useEffect } from "react";
import { useState } from "react";
import ReportList from "../components/ReportList";
import TimelineSelector from "../components/TimelineSelector";

export default function TecStaffAccReport() {
  useEffect(() => {});
  const [selectedYear, setSelectedYear] = useState("2024");

  return (
    <>
      <section className="w-full mx-auto p-[20px] flex flex-col justify-center text-center scrollable-container">
        <div className="w-full">
          <div className="w-full flex flex-col mt-[55px]">
            <div>
              <h2 className="text-[#000000] text-[30.857px] sm:text-[36px] font-semibold select-none text-center">
                同仁交通傷害事故報告
              </h2>
            </div>
            <div>
              <h3 className="text-[#006794] text-[13.713px] sm:text-[22px] font-semibold select-none text-center">
                Employee Traffic Injury Report
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-[5px] ">
            <div className="w-[60%] xs:w-[40%] border-solid border-[3px] border-[#006794]" />
          </div>
          <div className="flex flex-row justify-center items-start mt-[40px] mb-[50px] min-h-[400px]">
            <div className="w-[360px]">
              <ReportList selectedYear={selectedYear} />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[320px] lg:top-[490px] right-0 ">
        <TimelineSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
    </>
  );
}

TecStaffAccReport.propTypes = {};
