import PropTypes from "prop-types";

export default function LoginForm({
  handleLogin,
  handleChange,
  errors,
  selectedOption,
  handleCheckboxChange,
}) {
  return (
    <>
      <div>
        <div className="w-[340px] xs:w-[420px] ss:w-[500px]">
          <div className="relative h-[70px] bg-[#006794] rounded-t-lg flex justify-center items-center">
            <h3 className="absolute font-bold text-[20px] text-white">
              泰科同仁登入
            </h3>
          </div>
          <div className="validation relative h-[510px] bg-white rounded-b-lg px-[40px] py-[20px] shadow-sm">
            <form onSubmit={handleLogin}>
              <div className="input-control mb-[10px]">
                <div className="flex justify-start">
                  <label htmlFor="workId" className="text-[16px] font-semibold">
                    同仁工號
                  </label>
                </div>
                <input
                  id="workId"
                  name="workId"
                  type="text"
                  placeholder="請輸入工號"
                  onChange={handleChange}
                  className="w-full h-[46px] bg-[#F3F2F2] rounded-[10px] focus:outline-none px-[20px] placeholder:font-semibold placeholder:text-[16px] placeholder:tracking-[1px]"
                />
                <div className="flex justify-end">
                  {errors.workId && (
                    <span className="text-rose-500 font-bold">
                      {errors.workId}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-control mb-[10px]">
                <div className="flex justify-start">
                  <label
                    htmlFor="password"
                    className="text-[16px] font-semibold"
                  >
                    密碼
                  </label>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="請輸入密碼"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-[46px] bg-[#F3F2F2] rounded-[10px] focus:outline-none px-[20px] placeholder:font-semibold placeholder:text-[16px] placeholder:tracking-[1px]"
                />
                <div className="flex justify-end">
                  {errors.password && (
                    <span className="text-rose-500 font-bold">
                      {errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-start">
                <label
                  htmlFor="accountType"
                  className="text-[16px] font-semibold mb-[2px]"
                >
                  登入帳號種類
                </label>
              </div>
              <div className="accountType-container">
                <div>
                  <label htmlFor="option1">
                    <input
                      type="checkbox"
                      name="accountType"
                      id="option1"
                      value="1"
                      checked={selectedOption === "1"}
                      onChange={() => handleCheckboxChange("1")}
                      autoComplete="off"
                    />
                    <span>Core/Ops 維運部帳號登入</span>
                  </label>
                  <label htmlFor="option2">
                    <input
                      type="checkbox"
                      name="accountType"
                      id="option2"
                      checked={selectedOption === "2"}
                      onChange={() => handleCheckboxChange("2")}
                      autoComplete="off"
                    />
                    <span>訪客帳號登入</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                {errors.accountType && (
                  <span className="text-rose-500 font-bold">
                    {errors.accountType}
                  </span>
                )}
              </div>
              <div className="w-full flex justify-center mt-[15px]">
                <button
                  type="submit"
                  className="w-[300px] h-[50px] font-bold bg-[#333333] text-white rounded-[10px] "
                >
                  登入
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  selectedOption: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
};
