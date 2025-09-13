import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function TraSafetyPromotionFolderPage() {
  useEffect(() => {});
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

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
    <>
      <section className="w-full p-[20px]  mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-full mb-[4px]">
          <div className="w-full flex justify-start mt-[30px] mb-[1px] pl-[70px] xs:pl-[170px]">
            <h2 className="text-[#006794] text-[24.48px] font-semibold select-none">
              交安推動
            </h2>
          </div>
          <div className="w-full px-[35px] sm:px-[130px]">
            <div className="border-solid border-[1.94px] border-[#006794]" />
          </div>
          <div className="flex flex-col justify-start items-start  my-[20px] pl-[70px] xs:pl-[150px] ">
            <a
              onClick={() => {
                goToAnotherPage("TEC同仁交傷事故報告");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  TEC同仁交傷事故報告
                </p>
              </div>
            </a>
            <a
              onClick={() => {
                goToAnotherPage("交安主題式宣導教材");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  交安主題式宣導教材
                </p>
              </div>
            </a>

            <a
              onClick={() => {
                goToAnotherPage("交安宣導影片教材");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  交安宣導影片教材
                </p>
              </div>
            </a>

            <a
              onClick={() => {
                goToAnotherPage("台中市車禍事故影片");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  台中市車禍事故影片
                </p>
              </div>
            </a>

            <a
              onClick={() => {
                goToAnotherPage("交安活動照片");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  交安活動照片
                </p>
              </div>
            </a>

            <a
              onClick={() => {
                goToAnotherPage("每月宣導主題");
              }}
              className="cursor-pointer select-none"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  每月宣導主題
                </p>
              </div>
            </a>
          </div>
          <div className="w-full px-[35px] sm:px-[130px]">
            <div className="border-solid border-[1.94px] border-[#006794]" />
          </div>
          <div className="w-full flex justify-center my-[36px]">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={backToHome}
            >
              <p className="text-white text-[19.8px] font-bold text-[#006794]">
                回到首頁
              </p>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

TraSafetyPromotionFolderPage.propTypes = {};
