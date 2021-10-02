import Styled from "styled-components";

export const Button = Styled.button`
    background-color: #1F1F21;
    color: #fff;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 40px;
    font-size: 16px;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 12px 12px;
    border: none;
    cursor: pointer;

    &:hover{
        color: #1F1F21;
        background-color: #fff;
        border: 1px solid #1f1f1f;
    }
`

export const LogoutBtn = Styled.button`
    background-color: #fff;
    color: #1F1F21;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    height: 30px;
    width: 80px;
    margin-right: 20px;

    &:hover{
        color: #fff;
        background-color: #1F1F21;
        border: 1px solid #1f1f1f;
    }
`