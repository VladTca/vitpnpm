import socialImg from "../../assets/images/social-network.png";
import timerImg from "../../assets/images/timer.jpg";
import counterImg from "../../assets/images/counter.png";
import {useTranslation} from "react-i18next";
import rover from "../../assets/images/rover.png";
import llr from "../../assets/images/llr.png"


const useWorkData = () => {
  const { t } = useTranslation();

  return [
    {
      title: "Little Lemon Restaurant",
      text: "The site of the restaurant written using the React, Redux, Typescript, etc. ",
      src: llr,
      type: "react",
      dhref: "https://vladtca.github.io/little_lr/",
      chref:
          "https://github.com/VladTca/little_lr/tree/a1f9f0b76250dd1a21ffbee99d577fcbdefa510b",
      id: 1,
    },
    {
      title: "RoverShop",
      text: "The design of the store and the sale and repair of bicycles.",
      src: rover,
      type: "design",
      dhref: "https://www.figma.com/design/gAwnE3Xeq8FZSJz7RskNE9/Rover?node-id=0-1&t=GZyvK3teab1VmhCH-1",
      chref:
        "https://www.figma.com/design/gAwnE3Xeq8FZSJz7RskNE9/Rover?node-id=0-1&t=GZyvK3teab1VmhCH-1",
      id: 2,
    },
    {
      title: t("counter"),
      text: t("counterDescription"),
      src: counterImg,
      type: "spa",
      dhref: "https://vladtca.github.io/advanced_counter2/",
      chref:
          "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 3,
    },
    {
      title: "Timer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
      src: timerImg,
      type: "react",
      chref:
        "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 4,
    },
    {
      title: "Social Network",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      src: socialImg,
      type: "spa",
      chref:
        "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 5,
    },
    {
      title: "Timer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
      src: timerImg,
      type: "react",
      chref:
        "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 6,
    },
  ];
};

export default useWorkData;
