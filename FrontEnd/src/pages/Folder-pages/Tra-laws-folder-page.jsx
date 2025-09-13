import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function TraLawsFolderPage() {
  useEffect(() => {});

  const navigate = useNavigate();

  function backToHome() {
    navigate("/");
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
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040013"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  道路交通法規
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040012"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  道路交通管理處罰條例
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=D0080090"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  道路交通事故處理辦法
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040019"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  高速公路及快速公路交...
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=K0040014"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  道路交通標誌標線號誌...
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040045"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  車輛行車事故鑑定及覆...
                </p>
              </div>
            </a>

            <a
              href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=K0040070"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center justify-center">
                <p className="text-[21.6px] font-bold text-[#006794]">
                  交通部公路總局各區監...
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

TraLawsFolderPage.propTypes = {};
