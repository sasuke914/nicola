import { useState } from "react";
import { Box } from "@mui/material";

import { insertEmail, sendEmail } from "../../../api/emailAPI";

import { gSocialIcon } from "../../../constant/group";
import { emailCircle } from "../../../assets";

import "./email.css";

const Email = () => {
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value)
    setEmailData({ ...emailData, email: e.target.value });
  };

  const handleClick = () => {
    insertEmail(emailData).then((data) => {
      if (data.error) {
        alert(data.error);
      } else {
        sendEmail(emailData).then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            alert(data.message);
          }
        });
      }
    });
  };

  const GsocialIcon = () => (
    <>
      {gSocialIcon.map((item, index) => (
        <Box key={index} className="emailCircle">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <img
              src={item.image}
              alt={item.image}
              style={{
                paddingTop: index === 2 ? "7px" : index === 6 ? "6px" : index === 5 ? "3px" : "0px",
                paddingLeft: `${index === 2 ? "5px" : index === 6 ? "2.5px" : "0px"
                  }`,
              }}
            />
          </a>
        </Box>
      ))}
    </>
  )

  return (
    <div className="Emailsection">
      <img src={emailCircle} className="groupImg" alt="groupImg" />
      <div className="emailTitle">The More Important</div>
      <div className="emailTxt">Physiological respiration involves</div>
      <div className="emailFooter">
        <div className="inputWrapper">
          <label className="inp">
            <input type="email" onChange={handleChange} value={emailData.email} id="inp" placeholder="&nbsp;" />
            <span className="label">Ваш Email</span>
            <span className="focus-bg"></span>
          </label>
          <button onClick={handleClick} className="emailSend">
            Подписаться
          </button>
        </div>
        <div className="emailIconWrapper">
          <GsocialIcon />
        </div>
      </div>
    </div>
  );
};

export default Email;
