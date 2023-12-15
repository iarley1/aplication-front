import styled from "styled-components";

export const StyledRegisterForm = styled.form `
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 80%;
        background-color: var(--color-grey-3);
        padding: 30px;
        margin-top: 10px;
        border-radius: 8px;
        position: absolute;
        top: 100px;

        h2 {
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            color: var(--color-grey-0);
            margin-bottom: 10px;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 10px;
        }

        label {
            font-weight: 400;
            font-size: 14px;
            line-height: 0px;
            color: var(--color-grey-0);
            margin-bottom: 10px;
            margin-top: 10px;
        }
        input {
            padding: 0 10px;
            width: 100%;
            height: 38.5px;
            background-color: var(--color-grey-2);
            color: var(--color-grey-0);
            border: 1px solid var(--color-grey-2);
            border-radius: 3.2px;
        }
        input::placeholder {
            color: var(--color-grey-1);
        }
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 38.5px;
            background-color: var(--color-primary);
            border: 1px solid var(--color-primary);
            border-radius: 4px;
            margin-top: 10px;
            font-weight: 500;
            font-size: 12.8px;
            color: var(--color-white-fixed);
            line-height: 21px;
            cursor: pointer;
        }
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 38.5px;
            background-color: var(--color-grey-1);
            border: 1.2182px solid var(--color-grey-1);
            color: var(--color-grey-0);
            border-radius: 4px;
        }
        p {
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            margin-top: 10px;
            margin-bottom: 10px;
            color: var(--color-grey-1);
            text-align: center;
        }

        @media (min-width: 1024px) {
             max-width: 600px;
             top: 200px;
        }
`