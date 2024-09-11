import TelegramIcon from "@mui/icons-material/Telegram";
import { Box, Typography } from "@mui/material";
import "./transition.css";

const Transition = () => {

  const TransitionContent = () => (
    <>
      <Typography className="colTxt">Lorem ipsum dolor sit amet</Typography>
      <Typography className="topTxt">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor{" "}
      </Typography>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://web.telegram.org"
        style={{ textDecoration: "none" }}
      >
        <Box className="transitionBtnWrap">
          <button className="transitionBtn">Обсудить проект</button>
          <div className="topCircleBorder">
            <div className="topCircle">
              <TelegramIcon className="topTelegram" />
            </div>
          </div>
        </Box>
      </a>
    </>
  )

  return (
    <>
      <div className="transitionTop transitionWrapper">
        <TransitionContent />
      </div>
      <div className="transitionTop1 transitionWrapper">
        <TransitionContent />
      </div>
    </>
  );
};

export default Transition;
