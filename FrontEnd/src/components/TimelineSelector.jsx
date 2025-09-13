// import { useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import * as React from "react";
// import FormHelperText from "@mui/material/FormHelperText";

export default function TimelineSelector({ selectedYear, setSelectedYear }) {
  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="flex flex-col gap-[5px] bg-[#003459] px-[30px] py-[15px] rounded-l-lg">
      <div>
        <p className="text-white text-center text-[16px] font-bold">
          請選擇指定年份
        </p>
      </div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          MenuProps={{ disableScrollLock: true }} // 避免在點擊時造成 Scroll bar 暫時消失的狀況
          value={selectedYear}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          labelStyle={{ color: "#ff0000" }}
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          <MenuItem value={"2024"}>
            <em className="font-medium not-italic">2024</em>
          </MenuItem>
          <MenuItem value={"2023"}>2023</MenuItem>
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

TimelineSelector.propTypes = {
  setCurrentAlbum: PropTypes.func,
  selectedYear: PropTypes.string,
  setSelectedYear: PropTypes.func,
};
