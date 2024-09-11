import { Link } from "react-scroll";
import { Box } from "@mui/material";
import { footerLeftInfo, footerBtnInfo, footerSocialInfo } from "../../constant/group";

import "./footer.css";

const Footer = () => {

  const FirstSection = () => (
    <Box className="footerFirst">
      <div>
        Physical space is often conceived in three linear dimensions,
        <br />
        although modern physicists usually con
      </div>
      <input className="footerInput" />
    </Box>
  )

  const SecondSection = () => (
    <div className="footerSecond">
      <Box>
        {footerLeftInfo.map((item, index) => (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="footerIcontxt"
          >
            {item.icons}
            <div>{item.letter}</div>
          </a>
        ))}
      </Box>
      <a
        href="https://web.telegram.org"
        target="_blank"
        rel="noreferrer"
        className="footerDarkBtn"
      >
        Lorem ipsum sit
      </a>
    </div>
  )

  const ThirdSection = () => (
    <Box className="footerThird">
      <div className="footerBtns">
        {footerBtnInfo.map((item, index) => (
          <div key={index} className="footerBtnItem" style={{ padding: item.padding }}>
            <Link to={item.path} spy={true} smooth={true}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <Box className="footerSocials">
        {footerSocialInfo.map((item, index) => (
          <a key={index} href={item.path} target="_blank" rel="noopener noreferrer">
            <img src={item.src} alt={item.src} />
          </a>
        ))
        }
      </Box>
    </Box>
  )

  const ForthSection = () => (
    <Box className="footerDown">
      <div>© 2024 Василий Петров</div>
      <div>Политика конфиденциальности</div>
    </Box>
  )

  return (
    <Box className="footerContainer">
      <div className="footerWrapper">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
      </div>
    </Box>
  );
};

export default Footer;
