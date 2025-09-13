import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LinkPopup1, LinkPopup2, LinkPopup3 } from "../components";
import { Outlet, Link } from "react-router-dom";

import { Header, Footer } from "../components";

export default function Layout2() {
  const [openLinkPopup1, setOpenLinkPopup1] = useState(false);
  const [openLinkPopup2, setOpenLinkPopup2] = useState(false);
  const [openLinkPopup3, setOpenLinkPopup3] = useState(false);

  useEffect(() => {});

  return (
    <>
      <div className=" w-full h-screen pb-[20px] z-0 bg-[#eeeeee] ">
        <Header
          setOpenLinkPopup1={setOpenLinkPopup1}
          setOpenLinkPopup2={setOpenLinkPopup2}
          setOpenLinkPopup3={setOpenLinkPopup3}
          openLinkPopup1={openLinkPopup1}
          openLinkPopup2={openLinkPopup2}
          openLinkPopup3={openLinkPopup3}
        />
        <Outlet />
        <div className="w-full fixed bottom-0">
          <Footer />
        </div>
      </div>

      {/* all link popups */}
      {openLinkPopup1 && <LinkPopup1 />}
      {openLinkPopup2 && <LinkPopup2 />}
      {openLinkPopup3 && <LinkPopup3 />}
    </>
  );
}

Layout2.propTypes = {};
