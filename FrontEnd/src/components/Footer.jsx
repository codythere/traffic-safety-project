import { logo } from "../assets";

export default function Footer() {
  return (
    <>
      <div className="w-full min-h-[62px] xs:min-h-[56px] flex justify-center bg-[#006794] ">
        <div className="w-full relative flex flex-col xs:flex-row justify-end xs:justify-center items-center xs:items-end p-[5px] xs:p-[10px]  xs:gap-[8px] select-none">
          <img
            src={logo}
            alt="logo"
            className="w-[60.48px] h-[22.464px] mb-[1.8px]"
          />
          <p className="text-white text-[14.4px] font-normal">
            Copyright 2024 TEC. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
