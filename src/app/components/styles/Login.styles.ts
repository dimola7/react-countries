import styled from "styled-components";

export const LoginContainer = styled.div`
    background-color: #2c2c54;
    height: 100vh;
    /* padding: 40px 20px; */
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 860px) {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
`
export const LeftGrid = styled.div`
    display: none;

    @media screen and (min-width: 860px) {
        display: block;
        background-color: #000;
        height: 100vh;
        width: 100%;
    }
`