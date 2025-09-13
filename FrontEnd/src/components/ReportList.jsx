import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListButtonGenerator from "./ListItemButtonGen";
import {
  staffAccArray2021,
  staffAccArray2022,
  staffAccArray2023,
  staffAccArray2024,
} from "../constants";

export default function ReportList({ selectedYear }) {
  const dynamicLabel = `${selectedYear}同仁交傷報告`;
  const getStaffAccArray = () => {
    switch (selectedYear) {
      case "2021":
        return staffAccArray2021;
      case "2022":
        return staffAccArray2022;
      case "2023":
        return staffAccArray2023;
      default:
        return staffAccArray2024; // 預設顯示當年份資料
    }
  };

  return (
    <div className="block">
      <div className="w-full flex justify-center">
        <h3 className="text-[#006794] text-[23.4px] sm:text-[28.8px] font-semibold select-none">
          {`${selectedYear} 同仁交傷報告`}
        </h3>
      </div>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav" aria-label={dynamicLabel}>
          <ListButtonGenerator
            staffAccArray={getStaffAccArray()}
            year={selectedYear}
          />
        </List>
      </Box>
    </div>
  );
}

ReportList.propTypes = {
  setCurrentAlbum: PropTypes.func,
  selectedYear: PropTypes.number,
};
