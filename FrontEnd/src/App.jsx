import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Layout,
  Layout2,
  Homepage,
  PageNotFound,
  TextbookPage,
  VideosPage,
  CarAccVidsPage,
  CampaignRecordsPage,
  MonthlyPrContentPage,
  CarAccPreventionFolder,
  TraLawsFolder,
  TraSafetyPromotionFolder,
  TecStaffAccReport,
  StaffLoginPage,
} from "./pages";
import { monthlyVidsArray } from "./constants";

import { ThemeProvider } from "@mui/material";
import MyTheme from "./MyTheme";
import { Toaster } from "react-hot-toast";

export default function App() {
  // Global States
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [accountType, setAccountType] = useState("manufac");

  const [completedWatching, setCompletedWatching] = useState(false);
  const [isDataInserted, setIsDataInserted] = useState(false);
  const [videoUrls, setVideoUrls] = useState([]);

  // FormData
  const [loginFormData, setLoginFormData] = useState({
    workId: "",
    name: "",
    password: "",
    accountType: "manufac",
    department: "",
  });
  const [visitorLoginFormData, setVisitorLoginFormData] = useState({
    sWorkId: "",
    sName: "",
    sDepartment: "",
    sAccountType: "visitor",
  });

  // For Testing
  useEffect(() => {
    console.log("全域States :");
    console.log(videoUrls);
  }, [videoUrls]);

  // 每次開啟網頁隨機挑選兩部影片的邏輯
  useEffect(() => {
    const getRandomVideos = () => {
      const indices = new Set();
      while (indices.size < 2) {
        indices.add(Math.floor(Math.random() * monthlyVidsArray.length));
      }
      // 將選取的索引轉換為陣列
      return Array.from(indices).map(
        (index) => monthlyVidsArray[index].filename
      );
    };

    setVideoUrls(getRandomVideos());
  }, []);

  // For Testing
  /*   useEffect(() => {
    console.log(loginFormData);
  }, [loginFormData]); */

  return (
    <ThemeProvider theme={MyTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout isLogin={isLogin} userName={userName} />}
          >
            <Route index element={<Homepage />} />
            <Route
              path="staff-login"
              element={
                <StaffLoginPage
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  setUserName={setUserName}
                  loginFormData={loginFormData}
                  setLoginFormData={setLoginFormData}
                  visitorLoginFormData={visitorLoginFormData}
                  setVisitorLoginFormData={setVisitorLoginFormData}
                  accountType={accountType}
                  setAccountType={setAccountType}
                />
              }
            />
            <Route
              path="tec-staff-acc-report"
              element={<TecStaffAccReport />}
            />
          </Route>

          <Route
            path="/tra-safety-promotion"
            element={<Layout isLogin={isLogin} userName={userName} />}
          >
            <Route path="textbook" element={<TextbookPage />} />
            <Route path="videos" element={<VideosPage />} />
            <Route path="tc-car-acc-vids" element={<CarAccVidsPage />} />
            <Route path="campaign-records" element={<CampaignRecordsPage />} />
            <Route
              path="monthly-promotion-content"
              element={
                <MonthlyPrContentPage
                  isLogin={isLogin}
                  completedWatching={completedWatching}
                  setCompletedWatching={setCompletedWatching}
                  loginFormData={loginFormData}
                  visitorLoginFormData={visitorLoginFormData}
                  accountType={accountType}
                  isDataInserted={isDataInserted}
                  setIsDataInserted={setIsDataInserted}
                  videoUrls={videoUrls}
                />
              }
            />
          </Route>

          <Route path="/folder" element={<Layout2 />}>
            <Route path="1" element={<TraLawsFolder />} />
            <Route path="2" element={<CarAccPreventionFolder />} />
            <Route path="3" element={<TraSafetyPromotionFolder />} />
          </Route>

          <Route
            path="*"
            element={<PageNotFound isLogin={isLogin} userName={userName} />}
          />
        </Routes>

        <Toaster
          toastOptions={{
            style: {
              color: "#000000",
              fontWeight: "600",
              padding: "8px 19px",
              gap: "10px",
            },
          }}
          position="top-center"
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}
