import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Link} from "react-router";

export const Slogan: React.FC = () => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <StyledSlogan id="slogan">
            <CenteredContainer>
                <FlexWrapper direction="column" align="center" justify="center">
                    <SectionTitle>I Am Currently Available for Employment</SectionTitle>
                    <p>Redirecting in {count} seconds...</p>
                    <Link to="/contacts">
                        <Button>Hire me</Button>
                    </Link>
                </FlexWrapper>
            </CenteredContainer>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CenteredContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
