export default function RectanglePage() {
  return (
    <section className="w-full flex flex-col items-center pt-[40px] mt-[96px] bg-[#DDDDDD]">
      <div className="mb-[20px]">
        <div className="flex flex-col mt-[35px] mb-[15px]">
          <div>
            <h2 className="text-[#000000] text-[30.857px] sm:text-[36px] font-semibold select-none">
              交通安全相關宣導影片
            </h2>
          </div>
          <div>
            <h3 className="text-[#006794] text-[18.856px] sm:text-[20px] font-semibold select-none text-center">
              Traffic Safety Awareness Video
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[50px] ">
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/P63eX_Jwe9Q"
            title="別讓無號誌路口 成為你的死亡路口(交通安全宣導影片)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/IcT-soSbDrs"
            title="防禦駕駛 3分鐘短片"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/1QAeS7XpCHU"
            title="防禦駕駛教戰大公開"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-[50px] mt-[50px] mb-[95px]">
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/dnDQGz7WMms"
            title="[防禦駕駛] 影響一輩子的用路觀念 (完整版)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/xCnHmwV3f3Q"
            title="【熊編來上課】第八堂：汽機車駕駛上路時容易疏忽的事項"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="block overflow-hidden w-[329.4px] h-[185.4px] rounded-[2.5px] transform translate-z-0 border-3 border-solid border-gray-300">
          <iframe
            width="329.4"
            height="185.4"
            src="https://www.youtube.com/embed/UFVcfDtF79o"
            title="內輪差宣導 (國語版)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
