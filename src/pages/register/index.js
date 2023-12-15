import { FormRegister } from "../../components/FormRegister";
import { StyledRegisterPage } from "./styles";
import imagem1 from "../../asserts/img/imagem1.jpeg"

export function RegisterPage () {
    return (
        <StyledRegisterPage>
            <img src={imagem1} alt=""/>
            <h1><span>TW </span>Piscicultura</h1>
            <FormRegister/>
        </StyledRegisterPage>
    )
}