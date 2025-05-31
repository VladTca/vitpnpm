import Typewriter from "typewriter-effect";
import photo from "../../assets/images/mf1.jpg";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.ts";
import {S} from "./Main_Styles";
import Tilt from "react-parallax-tilt";
import {Particl} from "../../components/particl/Particl.tsx";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <Particl />
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Vladimir Tcaciuc</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer. </p>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer.",
                    "Full Stack Engineer.",
                    "Software Developer.",
                    "JAVA Developer.",
                    "A Backend Developer.",
                    "Web Developer.",
                    "Frontend Developer.",
                    "React Developer.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </S.MainTitle>
          </div>

          <Tilt
            className="parallax-effect-img"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
          >
            <S.PhotoWrapper>
              <S.Photo src={photo} alt="" />
            </S.PhotoWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
