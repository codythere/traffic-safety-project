import { useState, useEffect } from "react";
import { LinkPopup1, LinkPopup2, LinkPopup3 } from "../components";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { Header, Footer } from "../components";

export default function Layout({ isLogin, userName }) {
  const [openLinkPopup1, setOpenLinkPopup1] = useState(false);
  const [openLinkPopup2, setOpenLinkPopup2] = useState(false);
  const [openLinkPopup3, setOpenLinkPopup3] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(true);

  // 當瀏覽器寬度 > 1020 時，Popup 才會顯示 (不論使用者是否已展開 Popup)
  // 這個方法很好用，也可以用來處來 NPM Module 的 RWD (以指定尺寸為限去更改帶入 Module 的變數的值)!
  useEffect(() => {
    const handleVisible = () => {
      if (window.innerWidth > 1020) {
        setPopupVisible(true);
      } else {
        setPopupVisible(false);
      }
    };

    window.addEventListener("resize", handleVisible);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleVisible);
    };
  }, []);

  return (
    <>
      <div className=" w-full z-0 bg-[#eeeeee] ">
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
        <div className="bg-[url('/src/assets/mainbg.jpg')] bg-cover bg-no-repeat bg-bottom opacity-60 ">
          <div className="w-full h-[307.8px] mx-auto flex flex-col justify-end items-center" />
        </div>
        <Outlet />
        <Footer />
      </div>

      {/* all link popups */}
      {isPopupVisible && openLinkPopup1 && <LinkPopup1 />}
      {isPopupVisible && openLinkPopup2 && <LinkPopup2 />}
      {isPopupVisible && openLinkPopup3 && <LinkPopup3 />}
    </>
  );
}

Layout.propTypes = {
  isLogin: PropTypes.bool,
  userName: PropTypes.string,
};
