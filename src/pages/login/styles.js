import styled from "styled-components";

export const StyledLoginPage = styled.body `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    /* background-color: var(--color-grey-4); */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h1 {
        position: absolute;
        color: var(--color-grey-0);
        top: 70px;
    }

    h1 > span {
         color: var(--color-negative);
    }

    @media (min-width: 1024px) {
        justify-content: center;
        top: 0;

        h1 {
            top: 160px;
        }
    }
`
