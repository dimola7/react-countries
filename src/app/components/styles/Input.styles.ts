import styled from "styled-components";

export const InputField = styled.input`
    border: 1px solid #8D99AE;
    outline: none;
    display: flex;
    justify-content: center;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0 12px;
    font-size: 20px;
    transition: 0.3s ease;
    background-color: #FAFAFA;
    margin-bottom: ${(props: any) => props.marginBottom};
`