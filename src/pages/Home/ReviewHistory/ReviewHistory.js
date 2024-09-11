import { Box, Typography } from "@mui/material";
import { GoArrowUpRight } from "react-icons/go";
import ReviewHistoryTitle from "./ReviewHistoryTitle";
import CustomerBox from "../../../components/Box/CustomerBox";
import HistoryBox from '../../../components/Box/HistoryBox'
import { historyBox } from "../../../constant/group";
import { logo } from "../../../assets";
import "./reviewHistory.css";

const ReviewHistoryTopSection = () => (
  <div className="reviewHisTopWrapper">
    <Box className="topLeftWrap">
      <img src={logo} className="mdAvatar" alt="logoImg" />
      <Typography sx={{ marginLeft: "17px" }}>
        <b
          style={{
            fontSize: "17px",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            color: "var(--primary-txtColor)",
          }}
        >
          Василий Петров<br />
          Канал <br />
        </b>
        <span
          style={{
            fontSize: "16px",
            letterSpacing: "-0.03em",
            color: "var(--primary-txtColor)",
          }}
        >
          12 148 подписчика
        </span>
      </Typography>
    </Box>
    <Box className="topRightWrap">
      <button>
        Lorem ipsum &nbsp; <GoArrowUpRight style={{ fontSize: "20px" }} />
      </button>
    </Box>
  </div>
)

const ReviewHistory = () => {
  return (
    <Box id="metelegram">
      <ReviewHistoryTitle />
      <div className="reviewHisSection">
        <ReviewHistoryTopSection />
        <Box className="reviewHisBottomWrapper">
          <CustomerBox />
          <Box className="reviewBottomWrap" sx={{ marginLeft: "10px" }}>
            {historyBox.map((item, index) => (
              <HistoryBox key={index} {...item} />
            ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default ReviewHistory;
