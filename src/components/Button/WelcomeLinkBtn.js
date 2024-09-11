import { GoArrowUpRight } from "react-icons/go";

const WelcomeLinkBtn = (props) => {
  const { title, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="welcomeLinkBtn"
    >
      {title}
      <GoArrowUpRight style={{ fontWeight: "800" }} />
    </a>
  );
};

export default WelcomeLinkBtn;
