import { useRef, useState } from "react";
import { Link } from "react-scroll";

import WelcomeLinkBtn from "../../../components/Button/WelcomeLinkBtn";
import Transition from "../../../components/Transition/Transition";

import { welcomeLinkBtn } from "../../../constant/group";
import { logo, pause, play, welcomeVideo } from "../../../assets";

import "./welcome.css";

const Welcome = () => {

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div id="welcome" className="welcomeContainer">
      <div className="welcomeWrapper">
        <div className="welcomeLeft">
          <div className="welcomeImgWrap">
            <img
              src={isPlaying ? pause : play}
              onClick={isPlaying ? handlePause : handlePlay}
              className="circleImg"
              style={{ zIndex: "100" }}
              alt="Play Button"
            />
            {isPlaying ? (
              <video
                ref={videoRef}
                className="logoImg"
                autoPlay
                onEnded={handleVideoEnd}
              >
                <source src={welcomeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={logo} alt="logoImg" className="logoImg" />
            )}
          </div>
          <div className="welcomeLinkWrap">
            {welcomeLinkBtn.map((item, index) => (
              <WelcomeLinkBtn
                key={index}
                title={item.title}
                url={item.path}
              />
            ))}
          </div>
        </div>
        <div className="welcomeRight">
          <div className="welcomeTitle">
            Lorem Ipsum Dolo <span>res amen lorem</span>
          </div>
          <div className="welcomeText">
            Alcohol based exposures through inadvertently consuming hand
            sanitizer, have been observed to produc
          </div>
          <Link to="mypub" spy={true} smooth={true}>
            <button className="welcomeBtn">Lorem ipsum</button>
          </Link>
        </div>
      </div>
      <Transition />
    </div>
  );
};

export default Welcome;
