import socialImg from "../../assets/images/social-network.png";
import timerImg from "../../assets/images/timer.jpg";
import counterImg from "../../assets/images/counter.png";
import { useTranslation } from "react-i18next";

const useWorkData = () => {
  const { t } = useTranslation();

  const worksData = [
    {
      title: t("counter"),
      text: t("counterDescription"),
      src: counterImg,
      type: "spa",
      dhref: "https://vladtca.github.io/advanced_counter2/",
      chref:
        "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 1,
    },
    {
      title: "Timer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
      src: timerImg,
      type: "react",
      chref:
        "https://github.com/VladTca/advanced_counter2/tree/60528e283ca0b048202e16ce07b8ec0f1abe1c84",
      id: 2,
    },
    {
      title: "Social Network",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      src: socialImg,
      type: "spa",
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
  return worksData;
};

export default useWorkData;
