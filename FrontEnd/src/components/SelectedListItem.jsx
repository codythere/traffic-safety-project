import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import PropTypes from "prop-types";
import {
  imagesAlbum1,
  imagesAlbum2,
  imagesAlbum3,
  imagesAlbum4,
  imagesAlbum5,
} from "../constants";

export default function SelectedListItem({ setCurrentAlbum }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="hidden lg:block">
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={() => {
              handleListItemClick(0);
              setCurrentAlbum(imagesAlbum1);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2024 交安活動精選" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={() => {
              handleListItemClick(1);
              setCurrentAlbum(imagesAlbum2);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2024 Q1 IDL+技師全員安全宣導座談" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 2}
            onClick={() => {
              handleListItemClick(2);
              setCurrentAlbum(imagesAlbum3);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2024 大型交安活動" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 3}
            onClick={() => {
              handleListItemClick(3);
              setCurrentAlbum(imagesAlbum4);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2024 新人交安訓練" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 4}
            onClick={() => {
              handleListItemClick(4);
              setCurrentAlbum(imagesAlbum5);
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="2024 體感訓" />
          </ListItemButton>
        </List>
        <Divider />
      </Box>
    </div>
  );
}

SelectedListItem.propTypes = {
  setCurrentAlbum: PropTypes.func,
};
