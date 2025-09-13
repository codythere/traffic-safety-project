export default function LinkPopup2() {
  return (
    <div className="fixed bg-white top-[72px] right-[238px] rounded-[7px] w-[220px] h-[208px] py-[15px] px-[22px] z-30 ">
      <div className="flex w-full h-full justify-top items-start flex-col gap-[2px]">
        <a href="https://168.motc.gov.tw/" target="_blank" rel="noreferrer">
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">交通安全入口網</p>
          </div>
        </a>
        <a href="https://hpt.thb.gov.tw/" target="_blank" rel="noreferrer">
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">機車危險感知教育平台</p>
          </div>
        </a>
        <a href="http://www.995.tw/car/" target="_blank" rel="noreferrer">
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">車禍防治聯盟</p>
          </div>
        </a>
        <a
          href="https://www.car-safety.org.tw/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">車輛安全資訊網</p>
          </div>
        </a>
        <a
          href="http://www.995.tw/car2/01.htm"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">車禍權益參考</p>
          </div>
        </a>
        <a
          href="http://www.995.tw/car2/02.htm"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">車禍處理流程參考</p>
          </div>
        </a>
        <a
          href="https://www.mvdis.gov.tw/#gsc.tab=0"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">監理服務網</p>
          </div>
        </a>
      </div>
    </div>
  );
}

LinkPopup2.propTypes = {};
