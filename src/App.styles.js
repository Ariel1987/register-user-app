import styled, { css } from "styled-components"

export const Wrapper = styled.section`
    ${({ theme }) => css`
        height: 100vh;
        background-color: ${theme.colors.background};
        display: flex;
        flex-direction: column;
    `}
`

export const RegisterUserWrapper = styled.section`
    ${({ theme }) => css`
        margin: auto;
        margin-top: 5vh;
        margin-bottom: 0;
        width: 50%;
        padding: 10px;
        background: ${theme.colors.primary};
        border-radius: 10px;
    `}
`

export const ErrorWrapper = styled.section`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background: ${theme.colors.terciary};

    `}
`
