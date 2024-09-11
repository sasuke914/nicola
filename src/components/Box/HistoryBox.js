import { Telegram } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";

const HistoryBox = (props) => {
  const { content, date, imgUrl } = props;

  return (
    <Box
      className={`cardStyle ${imgUrl === "" ? "img-card" : ""}`}
      sx={{ margin: "10px 0", width: imgUrl === "" ? "45%" : "100%" }}
    >
      <Box
        className="card-left"
        style={{ width: imgUrl === "" ? "100%" : "40%" }}
      >
        <Box className="cardTxt">
          <Telegram />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "19px",
            }}
          >
            {content}
          </Typography>
        </Box>
        <Typography className="defaultWrapper">
          <a
            href="https://web.telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="itemCenter reviewCardTag">
              Читать телеграм <GoArrowUpRight />
            </span>
          </a>
          <span className="itemCenter xmText" style={{ marginRight: "18px" }}>
            {date}
          </span>
        </Typography>
      </Box>
      {imgUrl && <img className="right-img" src={imgUrl} alt="right-img" />}
    </Box>
  );
};

export default HistoryBox;
