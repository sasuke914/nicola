import AddIcon from "@mui/icons-material/Add";
import { btnRound } from "../../assets";

const CustomBtn = () => {
  return (
    <div className="icon-button">
      <div className="button-title">Заполнить бриф</div>
      <div className="button-icon">
        <img className="vector-icon" src={btnRound} alt="vector" />
        <div className="icon">
          <AddIcon className="cardAddIcon" />
        </div>
      </div>
    </div>
  );
};

export default CustomBtn;
