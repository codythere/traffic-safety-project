import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LinkPopup1, LinkPopup2, LinkPopup3 } from "../components";
import { Header, Footer } from "../components";
import Illustration404 from "../components/icons/Illustration404";

// 因為目前只能透過輸入錯誤網址進入此頁面
// 但因途徑是透過輸入網址，所以一定會遺失掉所有 States
// 代表被帶入的 States 一定都會是初始值
export default function PageNotFound({ isLogin, userName }) {
  const [openLinkPopup1, setOpenLinkPopup1] = useState(false);
  const [openLinkPopup2, setOpenLinkPopup2] = useState(false);
  const [openLinkPopup3, setOpenLinkPopup3] = useState(false);

  console.log("PageNotFound props", { isLogin, userName });

  return (
    <>
      <div className=" w-full z-0 bg-[#eeeeee]">
        <Header
          setOpenLinkPopup1={setOpenLinkPopup1}
          setOpenLinkPopup2={setOpenLinkPopup2}
          setOpenLinkPopup3={setOpenLinkPopup3}
          openLinkPopup1={openLinkPopup1}
          openLinkPopup2={openLinkPopup2}
          openLinkPopup3={openLinkPopup3}
          isLogin={isLogin}
          userName={userName}
        />
        <section className="w-full min-h-screen  flex flex-col lg:flex-row justify-center items-center text-center gap-[60px] ">
          <div className="hidden lg:block">
            <Illustration404 />
          </div>

          <div className="flex flex-col">
            <h2 className="text-[#00294C] text-[72px] font-semibold select-none mr-[100px]">
              404
            </h2>
            <span className="flex flex-col  items-start ml-[20px]">
              <p className="text-[#006794] text-[30.24px] font-semibold select-none">
                找不到相關頁面，
              </p>
              <p className="text-[#006794] text-[30.24px] font-semibold select-none">
                請確認網址並重新嘗試。
              </p>
            </span>
          </div>
        </section>

        <Footer />
      </div>

      {/* all link popups */}
      {openLinkPopup1 && <LinkPopup1 />}
      {openLinkPopup2 && <LinkPopup2 />}
      {openLinkPopup3 && <LinkPopup3 />}
    </>
  );
}

PageNotFound.propTypes = {
  isLogin: PropTypes.bool,
  userName: PropTypes.string,
};
