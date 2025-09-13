import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import LoginForm from "../components/Login";
import VisitorLoginForm from "../components/VisitorLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function StaffLoginPage({
  isLogin,
  setIsLogin,
  setUserName,
  loginFormData,
  setLoginFormData,
  visitorLoginFormData,
  setVisitorLoginFormData,
  accountType,
  setAccountType,
}) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("1");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight); // 滾動到頁面底部
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (accountType === "manufac") {
      setLoginFormData({
        ...loginFormData,
        [name]: value,
      });
    } else if (accountType === "visitor") {
      // 若 Input 的 name = sDepartment ，則自動將英文轉換為大寫
      const newValue = name === "sDepartment" ? value.toUpperCase() : value;

      setVisitorLoginFormData({
        ...visitorLoginFormData,
        [name]: newValue,
      });
    }
  };

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);

    if (value == "1") {
      setAccountType("manufac");
      // 清洗欄位 & 驗證器
      setLoginFormData({
        workId: "",
        password: "",
        accountType: "manufac",
        department: "",
      });
      setErrors({});
    } else if (value == "2") {
      setAccountType("visitor");
      // 清洗欄位 & 驗證器
      setVisitorLoginFormData({
        sWorkId: "",
        sName: "",
        sDepartment: "",
        sAccountType: "visitor",
      });
      setErrors({});
    }
  };

  const handleLogin = async (event) => {
    // 防止表單的默認提交行為
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }

    const validationErrors = {};

    // Validations
    if (accountType === "manufac") {
      // VALIDATION for Manufacture Users
      if (!loginFormData.workId.trim()) {
        validationErrors.workId = "必填";
      } else if (loginFormData.workId.length < 6) {
        validationErrors.workId = "請提供真實的工號";
      }

      if (!loginFormData.password.trim()) {
        validationErrors.password = "必填";
      }
    } else if (accountType === "visitor") {
      // VALIDATION for Visitors
      if (!visitorLoginFormData.sWorkId.trim()) {
        validationErrors.sWorkId = "必填";
      } else if (visitorLoginFormData.sWorkId.length < 6) {
        validationErrors.sWorkId = "請提供真實的工號";
      }

      if (!visitorLoginFormData.sName.trim()) {
        validationErrors.sName = "必填";
      }

      if (!visitorLoginFormData.sDepartment.trim()) {
        validationErrors.sDepartment = "必填";
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //submit form...
      console.log("驗證器驗證成功");
      console.log("即將傳送至 API 進行帳號密碼認證");

      // Send to API to confirm accound & password
      if (accountType === "manufac") {
        try {
          // 準備要發送的資料
          const payload = loginFormData;

          // 使用 Axios 發送 POST 請求
          // 在部署到正式環境前要將以下的 localhost 改為正式環境的名稱 (server ip)
          // localhost 是測試環境的位置
          // 測試環境呼叫 : "http://localhost:5500/api/emp/login"
          // 正式環境呼叫 : "http://10.96.77.93:5500/api/emp/login"
          const response = await axios.post(
            "http://10.96.77.93:5500/api/emp/login",
            payload
          );
          console.log("伺服器回應:", response.data);

          if (response.data.message === "登入驗證成功") {
            setUserName(response.data.name);
            setLoginFormData((prevState) => ({
              ...prevState,
              name: response.data.name,
              department: response.data.department,
            }));

            setIsLogin(true);
            navigate("/tra-safety-promotion/monthly-promotion-content");
          } else {
            toast.error("維運部帳號登入失敗：\n工號與密碼不符或帳號不存在。");
          }
        } catch (error) {
          console.error("發送資料時發生錯誤:", error);
        }
      } else if (accountType === "visitor") {
        // visitor 資料不用做驗證，影片觀賞完成後再做紀錄就好
        setIsLogin(true);
        setUserName(visitorLoginFormData.sName);
        navigate("/tra-safety-promotion/monthly-promotion-content");
      }
    }
  };

  return (
    <>
      <section className="w-full  p-[20px]  mx-auto flex flex-col justify-center items-center text-center mb-[30px]">
        {isLogin && (
          <div className="mb-[32px] lg:pr-[840px]">
            <div className="flex flex-col mt-[55px]">
              <div>
                <h2 className="text-[#000000] text-[29.16px] sm:text-[34.02px] font-semibold select-none text-start">
                  每月宣導主題
                </h2>
              </div>
              <div>
                <h3 className="text-[#006794] text-[18.856px] sm:text-[22px] font-semibold select-none text-start">
                  Monthly Promotion Content
                </h3>
              </div>
            </div>
          </div>
        )}

        <div className="w-full flex flex-col justify-center items-center pt-[30px] pb-[10px] px-[50px] gap-[13px]">
          {isLogin === false && accountType === "manufac" && (
            <LoginForm
              handleLogin={handleLogin}
              handleChange={handleChange}
              errors={errors}
              handleCheckboxChange={handleCheckboxChange}
              selectedOption={selectedOption}
            />
          )}
          {isLogin === false && accountType === "visitor" && (
            <VisitorLoginForm
              handleLogin={handleLogin}
              handleChange={handleChange}
              errors={errors}
              handleCheckboxChange={handleCheckboxChange}
              selectedOption={selectedOption}
            />
          )}
        </div>
      </section>
    </>
  );
}

StaffLoginPage.propTypes = {
  isLogin: PropTypes.bool,
  setIsLogin: PropTypes.func,
  setUserName: PropTypes.func,
  loginFormData: PropTypes.object,
  setLoginFormData: PropTypes.func,
  visitorLoginFormData: PropTypes.object,
  setVisitorLoginFormData: PropTypes.func,
  accountType: PropTypes.string,
  setAccountType: PropTypes.func,
};
