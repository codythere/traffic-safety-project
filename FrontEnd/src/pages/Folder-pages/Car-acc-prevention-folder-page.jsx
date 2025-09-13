import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function CarAccPreventionFolderPage() {
  useEffect(() => {});
  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
  }

  function goToAnotherPage() {
    navigate("/tec-staff-acc-report");
  }

  return (
    <>
      <section className="w-full p-[16px]  mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-full mb-[4px]">
          <div className="w-full flex justify-start mt-[30px] mb-[1px] pl-[70px] xs:pl-[170px]">
            <h2 className="text-[#006794] text-[24.48px] font-semibold select-none">
              車禍防治
            </h2>
          </div>
          <div className="w-full px-[35px] sm:px-[130px]">
            <div className="border-solid border-[1.94px] border-[#006794]" />
          </div>
          <div className="flex flex-col justify-start items-start  my-[20px] pl-[70px] xs:pl-[150px] ">
            <a href="https://168.motc.gov.tw/" target="_blank" rel="noreferrer">
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  交通安全入口網
                </p>
              </div>
            </a>

            <a href="https://hpt.thb.gov.tw/" target="_blank" rel="noreferrer">
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  機車危險感知教育平台
                </p>
              </div>
            </a>

            <a href="http://www.995.tw/car/" target="_blank" rel="noreferrer">
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  車禍防治聯盟
                </p>
              </div>
            </a>

            <a
              href="https://www.car-safety.org.tw/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  車輛安全資訊網
                </p>
              </div>
            </a>

            <a
              href="http://www.995.tw/car2/01.htm"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  車禍權益參考
                </p>
              </div>
            </a>

            <a
              href="http://www.995.tw/car2/02.htm"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  車禍處理流程參考
                </p>
              </div>
            </a>
            <a
              href="https://www.mvdis.gov.tw/#gsc.tab=0"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  監理服務網
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

CarAccPreventionFolderPage.propTypes = {};
