import {
  pFacebook, pHabr, pLinkedin, pMail, pTelegram, pTwitter, pVcru, pYoutube,
  slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16,
  gTelegram, gVcru, gHabr, gFacebook, gLinkedin, gTwitter, gYoutube,
  gameImg, smallAvatar1, smallAvatar2, smallAvatar3, smallAvatar4,
} from "../assets";


//Layouts
const headerBtnInfo = [
  {
    title: "Lorem",
    path: "userlist",
    padding: "12.5px 24.5px 13.5px 24.5px",
  },
  {
    title: "Ipsum",
    path: "publication",
    padding: "12.5px 37.5px 13.5px 36.5px",
  },
  {
    title: "Dolor sit",
    path: "c_reviews",
    padding: "12.5px 34.5px 13.5px 34.5px",
  },
  {
    title: "Amet",
    path: "metelegram",
    padding: "12.5px 23.5px 13.5px 24.5px",
  },
  {
    title: "Commodo",
    path: "events",
    padding: "12.5px 14.5px 13.5px 14.5px",
  },
];

const footerLeftInfo = [
  {
    icons: <img src={pTelegram} alt="telegram" />,
    letter: "@login",
    url: "https://web.telegram.org",
  },
  {
    icons: <img src={pMail} alt="mail" />,
    letter: "mail@site.ru",
    url: "https://mail.ru",
  },
];

const footerBtnInfo = [
  {
    title: "Lorem",
    padding: "16px 24px 17px 24px",
    path: "userlist",
  },
  {
    title: "Ipsum",
    padding: "16px 37px 17px 36px",
    path: "publication",
  },
  {
    title: "Dolor sit",
    padding: "16px 34px 17px 34px",
    path: "c_reviews",
  },
  {
    title: "Amet",
    padding: "16px 24px 17px 23px",
    path: "metelegram",
  },
  {
    title: "Aenean",
    padding: "16px 23px 17px 23px",
    path: "events",
  },
];

const footerSocialInfo = [
  {
    path: "https://habr.com/ru/articles/",
    src: pHabr
  },
  {
    path: "https://vc.ru/",
    src: pVcru
  },
  {
    path: "https://ru.linkedin.com/",
    src: pLinkedin
  },
  {
    path: "https://www.facebook.com/",
    src: pFacebook
  },
  {
    path: "https://twitter.com",
    src: pTwitter
  },
  {
    path: "https://www.youtube.com",
    src: pYoutube
  },
]

//Welcome
const welcomeLinkBtn = [
  {
    title: "VC",
    path: "https://vc.ru/",
  },
  {
    title: "Telegram",
    path: "https://web.telegram.org",
  },
  {
    title: "Habr",
    path: "https://habr.com/ru/articles/",
  },
];


//Publication
const publicationCards = [
  {
    purpleText: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    title: "5 dolor",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget",
    class: "pubCard"
  },
  {
    purpleText: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    title: "amet",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo",
    class: "pubCard1"
  },
  {
    purpleText: "Lorem ipsum dolor",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo`,
    title: "13 sit",
    content: "Lorem ipsum dolor sit '\n amet, consectetuer adipiscing elit",
    class: "pubCard"
  },
  {
    purpleText: "опишите задачу",
    text: "Отправляя форму, вы соглашаетесь  на обработку персоналных",
    title: "a 7 adipiscing",
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo eget",
    class: "pubCard"
  },
];

const ModalSelectBtn = [
  {
    title: "Lorem ipsum",
  },
  {
    title: "Dolor sit amet",
  },
  {
    title: "Sit amet",
  },
  {
    title: "Consectetuer",
  },
  {
    title: "Donec quam felis",
  },
  {
    title: "Curabitur ullamcorper",
  },
]

const ModalInputTitle = [
  "Ваше имя", "Ваш телефон", "Ваш telegram", "Ваш email"
]

//UserList
const smallAvatar = [
  {
    url: smallAvatar1,
    title: "Lorem",
    images: [slide1, slide2, slide3, slide4],
  },
  {
    url: smallAvatar2,
    title: "Ipsum",
    images: [slide5, slide6, slide7, slide8],
  },
  {
    url: smallAvatar3,
    title: "Sit amet",
    images: [slide9, slide10, slide11, slide12],
  },
  {
    url: smallAvatar4,
    title: "Consectetuer",
    images: [slide13, slide14, slide15, slide16],
  },
];

const numberInfo = [
  {
    number: "20",
    add: "+",
    description: ["Lorem", "Ipsum Dolor"],
    style: { width: '80px', marginRight: '60px' },
  },
  {
    number: "50",
    add: "+",
    description: ["Consectetuer", "adipiscing"],
    style: { width: '88.72px', marginRight: '60px' },
  },
  {
    number: "187",
    add: "+ sit",
    description: ["Lorem", "Ipsum Dolor"],
    style: { width: '91px', marginRight: '68px' },
  },
  {
    number: "5",
    add: "amet",
    description: ["Consectetuer", "adipiscing"],
    style: { width: '80px', marginRight: '46.12px' },
  },
  {
    number: "30",
    add: "+",
    description: ["Lorem", "Ipsum Dolor"],
    style: { width: '90px' },
  },
]

const skillButton = [
  "Lorem ipsum dolor sit",
  "Aenean massa socilis",
  "Nascetur ridiculus",
  "Donec",
  "Integer tincidunt Cras da",
  "Phasellus viverra",
];

//Email

const gSocialIcon = [
  {
    image: gTelegram,
    url: "https://web.telegram.org",
  },
  {
    image: gVcru,
    url: "https://vc.ru/",
  },
  {
    image: gHabr,
    url: "https://habr.com/ru/articles/",
  },
  {
    image: gFacebook,
    url: "https://www.facebook.com/",
  },
  {
    image: gLinkedin,
    url: "https://ru.linkedin.com/",
  },
  {
    image: gTwitter,
    url: "https://twitter.com",
  },
  {
    image: gYoutube,
    url: "https://www.youtube.com/",
  },
]

//ReviewHistory

const historyBox = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: gameImg,
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
]

export {
  //Layouts
  headerBtnInfo, footerLeftInfo, footerBtnInfo, footerSocialInfo,
  //Welcome
  welcomeLinkBtn,
  //Publication
  publicationCards, ModalSelectBtn, ModalInputTitle,
  //UserList
  smallAvatar, numberInfo, skillButton,
  //Email
  gSocialIcon,
  //ReviewHistory
  historyBox,
};
