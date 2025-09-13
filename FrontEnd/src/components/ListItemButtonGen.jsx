import { useState } from "react";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { FileDownload } from "@mui/icons-material";
import toast from "react-hot-toast";

export default function ListButtonGenerator({ staffAccArray, year }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const handlePdfDownload = (pdfName) => {
    const link = document.createElement(`a`);

    if (year === "2021") {
      link.href = `/tra-acc-reports/acc-reports-2021/${pdfName}.pdf`;
    } else if (year === "2022") {
      link.href = `/tra-acc-reports/acc-reports-2022/${pdfName}.pdf`;
    } else if (year === "2023") {
      link.href = `/tra-acc-reports/acc-reports-2023/${pdfName}.pdf`;
    } else if (year === "2024") {
      link.href = `/tra-acc-reports/acc-reports-2024/${pdfName}.pdf`;
    }

    link.download = `${pdfName}.pdf`;
    link.click();
    toast.success(`${pdfName} 下載完成 !`);
  };

  const divs = [];

  const staffAccArrayDiv = (
    <div>
      {staffAccArray.map((staffAccInfo) => (
        <ListItemButton
          key={`key-${staffAccInfo.index}`}
          selected={selectedIndex === staffAccInfo.index}
          onClick={() => {
            handleListItemClick(staffAccInfo.index);
            handlePdfDownload(staffAccInfo.filename);
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <FileDownload />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={staffAccInfo.filename} />
        </ListItemButton>
      ))}
    </div>
  );

  divs.push(staffAccArrayDiv);

  return <div>{divs}</div>;
}

ListButtonGenerator.propTypes = {
  staffAccArray: PropTypes.array,
  year: PropTypes.string,
};
