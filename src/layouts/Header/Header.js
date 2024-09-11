import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { GoSun } from "react-icons/go";
import { PiMoonLight } from "react-icons/pi";

import HeaderBtn from "../../components/Button/HeaderBtn";

import { headerBtnInfo } from "../../constant/group";

import "./header.css";

const Header = (props) => {
  const { theme, switchTheme } = props;
  const [checked, setChecked] = useState(theme === "light" ? false : true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    switchTheme();
  };

  useEffect(() => {
    window.localStorage.setItem("theme", "light");
  });

  const ToggleTheme = () => (
    <div className="toggleTheme">
      <i style={{ marginTop: "3.5px" }}>
        <GoSun style={{ color: "var(--primary-txtColor)" }} />
      </i>
      <label className="switch" style={{ margin: "0 12px" }}>
        <input type="checkbox" onChange={handleChange} checked={checked} />
        <span className="slider round"></span>
      </label>
      <i style={{ marginTop: "3.5px" }}>
        <PiMoonLight style={{ color: "var(--primary-txtColor)" }} />
      </i>
    </div>
  );

  return (
    <Box className="headerWrapper">
      <div className="headerLeftWrap">
        <div className="headerTitle">Василий Петров</div>
      </div>
      <div className="headerRightWrap">
        <div className="buttonGroup">
          {headerBtnInfo.map((item, index) => (
            <Link key={index} to={item.path} spy={true} smooth={true}>
              <HeaderBtn title={item.title} padding={item.padding} />
            </Link>
          ))}
        </div>
        <ToggleTheme />
      </div>
    </Box>
  );
};

export default Header;
