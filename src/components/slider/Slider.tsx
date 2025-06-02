import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {S} from "./Slider_Styles";
import "./../../styles/Slider.css";
import {useTranslation} from "react-i18next";

type SlidePropsType = {
  text: string;
  userName: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>@{props.userName}</S.Name>
    </S.Slide>
  );
};

const useSlides = () => {
  const { t } = useTranslation();
  const SLIDE_TEXTS =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return  [
      { id: 1, text: SLIDE_TEXTS, userName: t('userIvan') },
      { id: 2, text: SLIDE_TEXTS, userName: t('userPetr') },
      { id: 3, text: SLIDE_TEXTS, userName: t("userIgor") },
  ];
};



export const Slider = () => {
    const slides = useSlides();

    const items = slides.map(({ id, text, userName }) => (
        <Slide key={id} text={text} userName={userName} />
    ));

    return (
        <S.Slider>
            <AliceCarousel mouseTracking items={items} />
        </S.Slider>
    );
};

