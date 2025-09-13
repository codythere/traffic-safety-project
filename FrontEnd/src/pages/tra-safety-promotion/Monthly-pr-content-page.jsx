import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { VideoPlayerGen } from "../../components";
import axios from "axios";
import Swal from "sweetalert2";

export default function MonthlyPrContentPage({
  isLogin,
  completedWatching,
  setCompletedWatching,
  loginFormData,
  visitorLoginFormData,
  accountType,
  isDataInserted,
  setIsDataInserted,
  videoUrls,
}) {
  const navigate = useNavigate();

  function goToStaffLoginPage() {
    navigate("/staff-login");
  }

  // 影片觀賞完畢的 popup
  useEffect(() => {
    if (isLogin & completedWatching & (isDataInserted === false)) {
      Swal.fire({
        title: "已完成影片觀賞",
        text: "您已完成本月的宣導主題影片閱覽 !",
        icon: "success",
      });
    }
  }, [isLogin, completedWatching, isDataInserted]);

  useEffect(() => {
    // 如果完成影片觀賞，則將使用者資訊 Insert 進 table
    const handleDataInsertion = async () => {
      if (completedWatching & (isDataInserted === false)) {
        if (accountType === "manufac") {
          try {
            /*     console.log("即將做 insertion 的資料", loginFormData); */
            const payload = loginFormData;

            // 在部署到正式環境前要將以下的 localhost 改為正式環境的名稱 (server ip)
            // localhost 是測試環境的位置
            // 測試環境呼叫 : "http://localhost:5500/api/emp/watchedUser"
            // 正式環境呼叫 : "http://10.96.77.93:5500/api/emp/watchedUser"
            const response = await axios.post(
              "http://10.96.77.93:5500/api/emp/watchedUser",
              payload
            );
            console.log("伺服器回應:", response.data);

            if (
              response.data.message === "完成本月影片觀賞的用戶資料插入成功"
            ) {
              setIsDataInserted(true);
            }
          } catch (error) {
            console.error("發送資料時發生錯誤:", error);
          }
        } else if (accountType === "visitor") {
          try {
            /*  console.log("即將做 insertion 的資料", visitorLoginFormData); */
            const payload = visitorLoginFormData;

            // 在部署到正式環境前要將以下的 localhost 改為正式環境的名稱 (server ip)
            // localhost 是測試環境的位置
            // 測試環境呼叫 : "http://localhost:5500/api/visitor/watchedUser"
            // 正式環境呼叫 : "http://10.96.77.93:5500/api/visitor/watchedUser"
            const response = await axios.post(
              "http://localhost:5500/api/visitor/watchedUser",
              payload
            );
            console.log("伺服器回應:", response.data);

            if (
              response.data.message === "完成本月影片觀賞的用戶資料插入成功"
            ) {
              setIsDataInserted(true);
            }
          } catch (error) {
            console.error("發送資料時發生錯誤:", error);
          }
        }
      }
    };

    handleDataInsertion();
  }, [
    completedWatching,
    accountType,
    loginFormData,
    visitorLoginFormData,
    isDataInserted,
    setIsDataInserted,
  ]);

  return (
    <>
      {!isLogin && (
        <div className="w-full flex flex-col justify-center items-center pt-[30px] pb-[10px] px-[50px] gap-[13px]">
          <h2 className="text-[28px] font-bold">尚未登入，請先進行登入。</h2>
          <div className="w-full flex justify-center">
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={goToStaffLoginPage}
            >
              <p className="text-white text-[19.8px] font-bold text-[#006794]">
                前往登入
              </p>
            </Button>
          </div>
        </div>
      )}

      <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center mb-[30px] min-h-[340px]">
        {isLogin && (
          <>
            <div className="mb-[32px] lg:pr-[840px]">
              <div className="flex flex-col mt-[55px]">
                <div>
                  <h2 className="text-[#000000] text-[29.16px] sm:text-[34.02px] font-semibold select-none text-center lg:text-start">
                    每月宣導主題
                  </h2>
                </div>
                <div>
                  <h3 className="text-[#006794] text-[18.856px] sm:text-[22px] font-semibold select-none text-center lg:text-start">
                    Monthly Promotion Content
                  </h3>
                </div>
              </div>
            </div>
            <VideoPlayerGen
              setCompletedWatching={setCompletedWatching}
              videoUrls={videoUrls}
            />
          </>
        )}
      </section>
    </>
  );
}

MonthlyPrContentPage.propTypes = {
  isLogin: PropTypes.bool,
  completedWatching: PropTypes.bool,
  setCompletedWatching: PropTypes.func,
  loginFormData: PropTypes.object,
  visitorLoginFormData: PropTypes.object,
  accountType: PropTypes.string,
  isDataInserted: PropTypes.bool,
  setIsDataInserted: PropTypes.func,
  videoUrls: PropTypes.array,
};
