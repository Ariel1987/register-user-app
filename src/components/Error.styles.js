import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    ${({ theme }) => css`
        
        position: fixed;
        top: 30vh;
        left: 10%;
        width: 80%;
        z-index: 100;
        overflow: hidden;
        background: white;
        border-radius: 10px;

        header {
            background: ${theme.colors.button};
            padding: 1rem;
        }

        header h2 {
            margin: 0;
            color: white;
        }

        div {
            padding: 1rem;
        }

        footer {
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
        }


        @media (min-width: 768px) {
            left: calc(50% - 20rem);
            width: 40rem;
        }
    `}
`