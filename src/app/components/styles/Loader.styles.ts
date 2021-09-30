import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
    position: absolute;
    left: 53%;
    top: 100%;
    z-index: 1;
    margin: -120px 0 0 - 75px;
    border: 3px solid #f3f3f3;
    border-radius: 100%;
    border-top: 3px solid #f2aa4cff;
    width: 80px;
    height: 80px;
    animation: ${Animation} spin 1s linear infinite;
`