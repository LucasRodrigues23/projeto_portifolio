import styled from "styled-components";

export const HeaderStyled = styled.header`
    width: 100%;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        & > div {
            width: 90%;
            max-width: 1200px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            object-fit: cover;

            & > button {
                width: 40px;
                height: 30px;
                background-color: transparent;

                & > img {
                    width: 100%;
                    height: 100%;
                    animation: neonOn 2s;
                    animation-iteration-count: 1;
                }
            }

            & > img {
                width: 100px;
                animation: neonOn 2s;
                animation-iteration-count: 1;
            }

        }
`