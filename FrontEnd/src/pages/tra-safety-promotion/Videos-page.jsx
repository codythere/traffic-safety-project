import { useState, useEffect } from "react";
import { iframesarray1 as data } from "../../constants";
import { IframesGenerator } from "../../components";
import { Pagination } from "@mui/material";
import usePagination from "../../Pagination";

export default function VideosPage() {
  const [loading, setLoading] = useState(false); // 目前暫不使用 loading state => iframe 不適合
  const [currentPage, setCurrentPage] = useState(1);

  const PER_PAGE = 6; // 每頁顯示的物品數量

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE); // 將會得到一個包含引用的函式(usePagination) 的屬性和方法的物件 => _DATA

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    _DATA.jump(page);
  };

  useEffect(() => {});

  return (
    <>
      <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center">
        <div className="lg:pr-[795px]">
          <div className="flex flex-col mt-[55px]">
            <div>
              <h2 className="text-[#000000] text-[29.16px] sm:text-[34.02px] font-semibold select-none text-center lg:text-start">
                交安宣導影片教材
              </h2>
            </div>
            <div>
              <h3 className="text-[#006794] text-[16.984px] sm:text-[22px] font-semibold select-none text-center lg:text-start">
                Traffic Safety Promotion Video
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[8px] pb-[28.5px]">
        <IframesGenerator
          iframesArray={_DATA.currentData()}
          loading={loading}
        />
      </section>
      <div className="flex justify-center items-center pb-[22.5px]">
        <Pagination
          color="primary"
          size="large"
          page={currentPage}
          count={count}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}

VideosPage.propTypes = {};
