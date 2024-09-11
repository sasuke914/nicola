import { styled } from "@mui/material/styles";

import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import Welcome from "./Welcome/Welcome";
import MyPublications from "./MyPublications/MyPublications";
import UserList from "./UserList/UserList";
import Publication from "./Publication/Publication";
import Email from "./Email/Email";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import ReviewHistory from "./ReviewHistory/ReviewHistory";
import Events from "./Events/Events";

import useTheme from "../../hooks/useTheme";

import "./home.css";

const ThemeProvider = styled("div")({});

const Home = () => {
  const [theme, switchTheme] = useTheme();
  return (
    <>
      <ThemeProvider data-theme={theme}>
        <Header theme={theme} switchTheme={switchTheme} />
        <div className="homeContainer">
          <Welcome />
          <MyPublications />
          <UserList />
          <Publication />
          <Email />
          <CustomerReviews />
        </div>
        <div className="reviewHistoryContainer">
          <ReviewHistory />
        </div>
        <div className="homeContainer">
          <Events />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
