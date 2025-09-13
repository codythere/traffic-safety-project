import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function VideoPlayerGen({ setCompletedWatching, videoUrls }) {
  const [playedTime, setPlayedTime] = useState([0, 0]); // 初始播放時間陣列
  const [endedCount, setEndedCount] = useState(0); // 新增這一行
  const lastUpdatedTimeRef = useRef([0, 0]); // 用來追蹤上次更新的時間
  const [videoTitle, setVideoTitle] = useState(["", ""]);

  // 偵測是否已完成影片觀賞
  // GPT Solution
  useEffect(() => {
    const totalPlayedTime = playedTime.reduce((acc, time) => acc + time, 0);
    /*  console.log("totalPlayedTime:", totalPlayedTime); */
    if (totalPlayedTime > 50 && endedCount === 2) {
      setCompletedWatching(true);
    }
  }, [playedTime, endedCount, setCompletedWatching]);

  // 影片標題
  useEffect(() => {
    // 移除 .mp4 字串
    let videoTitle1 = videoUrls[0].replace(".mp4", "");
    let videoTitle2 = videoUrls[1].replace(".mp4", "");

    setVideoTitle([videoTitle1, videoTitle2]);

    console.log("videoTitle :");
    console.log(videoTitle);
  }, [videoUrls]);

  // GPT Solution
  const handleProgress = (index) => (progress) => {
    // 每1000ms更新一次播放時間
    const currentTime = Date.now();
    if (currentTime - lastUpdatedTimeRef.current[index] > 1000) {
      setPlayedTime((prevPlayedTime) => {
        const newPlayedTime = [...prevPlayedTime];
        newPlayedTime[index] = progress.playedSeconds; // 更新當前播放時間
        return newPlayedTime;
      });
      lastUpdatedTimeRef.current[index] = currentTime; // 更新上次更新的時間
    }
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-[70px] pb-[40px]">
        {videoUrls.map((url, index) => (
          <div key={index}>
            <div className="max-w-[529px]">
              <p className="font-semibold select-none text-center lg:text-start lg:pl-[15px] text-[22.5px]">
                {videoTitle[index]}
              </p>
            </div>
            <ReactPlayer
              key={index}
              className="bg-black"
              url={`/tra-monthly-pr-videos/${url}`}
              width="529.2px"
              height="352.8px"
              controls={true}
              onProgress={handleProgress(index)}
              onEnded={() => {
                setEndedCount((prevCount) => prevCount + 1);
              }}
            />
          </div>
        ))}
      </section>
    </>
  );
}

VideoPlayerGen.propTypes = {
  setCompletedWatching: PropTypes.func,
  videoUrls: PropTypes.array,
};
