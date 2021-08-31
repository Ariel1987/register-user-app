import styled, { css } from "styled-components"

export const Wrapper = styled.div`
    ${({ theme }) => css`
        padding: 10px;
        
        span {
            font-weight: ${theme.font.weight.bold};
        }
        
        input {
            margin: 5px 0 5px 0; 
            padding: 0.3vh;
            width: 100%;
            border: 1px solid ${theme.colors.secundary}
        }
        
        button {
            background: ${theme.colors.button};
            color: ${theme.colors.primary};
            padding: 0.25rem 1rem;
            font-weight: ${theme.font.weight.bold};
            border: 1px solid #4f005f;
            margin-top: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            
            :hover,
            :active {
                background: #741188;
                border-color: #741188;
            }

            :focus {
                outline: none;
            }
        }

    `}
`