import PropTypes from "prop-types";

export default function LinkPopup1() {
  return (
    <div className="fixed bg-white top-[72px] right-[342px] rounded-[7px] w-[220px] h-[207px] py-[15px] px-[22px] z-30 ">
      <div className="flex w-full h-full justify-top items-start flex-col gap-[2px]">
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040013"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="text-[16px] font-bold text-[#006794]">道路交通法規</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040012"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">道路交通管理處罰條例</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=D0080090"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">道路交通事故處理辦法</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040019"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">高速公路及快速公路交...</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040014"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">道路交通標誌標線號誌...</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040045"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">車輛行車事故鑑定及覆...</p>
          </div>
        </a>
        <a
          href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040070"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">交通部公路總局各區監...</p>
          </div>
        </a>
      </div>
    </div>
  );
}

LinkPopup1.propTypes = {};
