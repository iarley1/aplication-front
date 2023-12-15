import { Link } from "react-router-dom";
import { StyledLoginForm } from "./styles";

export function FormLogin () {
    return (
        <StyledLoginForm>
          <h2>Login</h2>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email"/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"/>
          </div>
          <button type="submit">Entrar</button>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </StyledLoginForm>
    )
}