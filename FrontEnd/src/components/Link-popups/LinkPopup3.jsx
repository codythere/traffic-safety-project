import { useNavigate } from "react-router-dom";

export default function LinkPopup3() {
  const navigate = useNavigate();

  function goToAnotherPage(pageName) {
    if (pageName === "交安主題式宣導教材") {
      navigate("/tra-safety-promotion/textbook");
    } else if (pageName === "交安宣導影片教材") {
      navigate("/tra-safety-promotion/videos");
    } else if (pageName === "台中市車禍事故影片") {
      navigate("/tra-safety-promotion/tc-car-acc-vids");
    } else if (pageName === "交安活動照片") {
      navigate("/tra-safety-promotion/campaign-records");
    } else if (pageName === "每月宣導主題") {
      navigate("/tra-safety-promotion/monthly-promotion-content");
    } else if (pageName === "TEC同仁交傷事故報告") {
      navigate("/tec-staff-acc-report");
    }
  }

  return (
    <div className="fixed bg-white top-[72px] right-[133px] rounded-[7px] w-[220px] h-[155px] py-[15px] px-[22px] z-30 ">
      <div className="flex w-full h-full justify-top items-start flex-col gap-[2px]">
        <a
          onClick={() => {
            goToAnotherPage("TEC同仁交傷事故報告");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="text-[16px] font-bold text-[#006794]">
              TEC同仁交傷事故報告
            </p>
          </div>
        </a>
        {/* <a
          onClick={() => {
            goToAnotherPage("交安主題式宣導教材");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="text-[16px] font-bold text-[#006794]">
              交安主題式宣導教材
            </p>
          </div>
        </a> */}
        <a
          onClick={() => {
            goToAnotherPage("交安宣導影片教材");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">交安宣導影片教材</p>
          </div>
        </a>
        <a
          onClick={() => {
            goToAnotherPage("台中市車禍事故影片");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">台中市車禍事故影片</p>
          </div>
        </a>
        <a
          onClick={() => {
            goToAnotherPage("交安活動照片");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">交安活動照片</p>
          </div>
        </a>
        <a
          onClick={() => {
            goToAnotherPage("每月宣導主題");
          }}
          className="cursor-pointer select-none"
        >
          <div className="flex items-center justify-center">
            <p className="font-bold text-[#006794]">每月宣導主題</p>
          </div>
        </a>
      </div>
    </div>
  );
}

LinkPopup3.propTypes = {};
