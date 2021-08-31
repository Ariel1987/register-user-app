import styled, { css } from "styled-components"

export const Wrapper = styled.ul`
    ${({ theme }) => css`
        padding: 0.5rem;
        list-style: none;
        
        p {
            margin: 0; 
            padding: 0.3vh;
            width: 100%;
            border: 1px solid ${theme.colors.secundary};
            font-weight: ${theme.font.weight.regular};
        }
    `}
`
