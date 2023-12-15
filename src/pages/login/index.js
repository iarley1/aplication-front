import { FormLogin } from "../../components/FormLogin";
import { StyledLoginPage } from "./styles";
import imagem1 from "../../asserts/img/imagem1.jpeg"

export function LoginPage () {
    return (
        <StyledLoginPage>
            <img src={imagem1} alt=""/>
            <h1><span>TW </span>Piscicultura</h1>
            <FormLogin/>
        </StyledLoginPage>
    )
}