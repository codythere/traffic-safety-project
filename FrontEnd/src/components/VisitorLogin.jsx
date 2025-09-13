import PropTypes from "prop-types";

export default function VisitorLoginForm({
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
                  <label
                    htmlFor="sWorkId"
                    className="text-[16px] font-semibold"
                  >
                    同仁工號
                  </label>
                </div>
                <input
                  id="sWorkId"
                  name="sWorkId"
                  type="text"
                  placeholder="請輸入工號"
                  onChange={handleChange}
                  className="w-full h-[46px] bg-[#F3F2F2] rounded-[10px] focus:outline-none px-[20px] placeholder:font-semibold placeholder:text-[16px] placeholder:tracking-[1px]"
                />
                <div className="flex justify-end">
                  {errors.sWorkId && (
                    <span className="text-rose-500 font-bold">
                      {errors.sWorkId}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-control mb-[10px]">
                <div className="flex justify-start">
                  <label htmlFor="sName" className="text-[16px] font-semibold">
                    姓名
                  </label>
                </div>
                <input
                  id="sName"
                  name="sName"
                  type="text"
                  placeholder="請輸入姓名"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-[46px] bg-[#F3F2F2] rounded-[10px] focus:outline-none px-[20px] placeholder:font-semibold placeholder:text-[16px] placeholder:tracking-[1px]"
                />
                <div className="flex justify-end">
                  {errors.sName && (
                    <span className="text-rose-500 font-bold">
                      {errors.sName}
                    </span>
                  )}
                </div>
              </div>
              <div className="input-control mb-[10px]">
                <div className="flex justify-start">
                  <label htmlFor="sName" className="text-[16px] font-semibold">
                    部門
                  </label>
                </div>
                <input
                  id="sDepartment"
                  name="sDepartment"
                  type="text"
                  placeholder="請輸入部門名稱"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-[46px] bg-[#F3F2F2] rounded-[10px] focus:outline-none px-[20px] placeholder:font-semibold placeholder:text-[16px] placeholder:tracking-[1px]"
                />
                <div className="flex justify-end">
                  {errors.sDepartment && (
                    <span className="text-rose-500 font-bold">
                      {errors.sDepartment}
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
                      name="sAccountType"
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
                      name="sAccountType"
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
                {errors.sAccountType && (
                  <span className="text-rose-500 font-bold">
                    {errors.sAccountType}
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

VisitorLoginForm.propTypes = {
  handleLogin: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  selectedOption: PropTypes.string,
  handleCheckboxChange: PropTypes.func,
};
