import styled from "styled-components";

export const Container = styled.div`
    background-color: #2c2c54;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const CardContainer = styled.div`
    margin: 40px 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    @media only screen and (min-width: 1200px) {
        margin: 40px 200px;
    }
    @media only screen and (max-width: 1200px) and (min-width: 320px){
        justify-content: center;
    }
`