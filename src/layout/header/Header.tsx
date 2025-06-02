import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopmenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles";
import React from "react";
import {useNavigate} from "react-router-dom";
import LanguageSwitcher from "../../components/languageSwitch/LanguageSwitcher.tsx";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const handleLogoClick = () => {
    navigate("/slogan");
  };


  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            <Logo />
          </div>
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
          <LanguageSwitcher/>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
