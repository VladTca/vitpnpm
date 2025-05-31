import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

const Header = styled.header`
    background-color: rgba(31, 31, 32, 0.9);
    width: 100%;
    padding: 20px 0;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: 1px solid ${theme.colors.borderColor};
`;

export const S = {
    Header,

}