import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { GoArrowUpRight } from "react-icons/go";

import UserListTitle from "./UserListTitle";
import SkillButton from "../../../components/Button/SkillButton";
import BlackBtn from "../../../components/Button/BlackBtn";
import PreviewImage from "./Preview/PreviewImage";

import { defaultUser } from "../../../assets";
import { numberInfo, skillButton, smallAvatar } from "../../../constant/group";

import "./userlist.css";

const UserList = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setOpen(true);
    setSelected(index);
  };

  const UserListLeftSection = () => (
    <div className="userListLeftWrap">
      {selected >= 0 && (
        <PreviewImage selected={selected} open={open} setOpen={setOpen} />
      )}
      <img className="customerImg" alt="customerImg" src={defaultUser} />
    </div>
  )

  const SmallAvatarSquare = () => (
    <div className="circlePhotoContainer">
      {smallAvatar.map((item, index) => (
        <Box key={index} onClick={() => handleClick(index)} sx={{ marginRight: "21px" }}>
          <img src={item.url} alt={item.url} className="smallAvatar" />
          <div className="smallAvatarText">{item.title}</div>
        </Box>
      ))}
    </div>
  )

  const NumberSquare = () => (
    <div className="skillCardWrap">
      {numberInfo.map((item, index) => (
        <div key={index} style={item.style}>
          <div className="piceNumber">
            <CountUp end={item.number} duration={4} />
            <span className={index !== 3 ? 'hidden' : ''}>&nbsp;</span>{item.add}
          </div>
          <div className="piceText">
            {item.description[0]} <br /> {item.description[1]}
          </div>
        </div>
      ))}
    </div>
  )

  const SkillBtnSquare = () => (
    <Box className="skillBtnWrapper">
      {skillButton.map((title, index) => (
        <SkillButton key={index} number={index} title={title} />
      ))}
    </Box>
  )

  return (
    <Box id="userlist">
      <UserListTitle />
      <Box className="customerBottom">
        <UserListLeftSection />
        <div className="userListRightWrap">
          <SmallAvatarSquare />
          <Typography className="middleText">
            Lorem Ipsum <span>Dolores Amen</span>
          </Typography>
          <NumberSquare />
          <SkillBtnSquare />
          <div style={{ marginTop: "30px" }}>
            <BlackBtn title="Donec vitae sapien ut liber" goarrowupright={<GoArrowUpRight />} />
          </div>
        </div>
      </Box>
    </Box >
  );
};

export default UserList;
