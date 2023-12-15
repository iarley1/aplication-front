import { Link } from "react-router-dom";
import { StyledRegisterForm } from "./styles";

export function FormRegister () {
    return (
        <StyledRegisterForm>
          <h2>Cadastro</h2>
          <div>
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome"/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email"/>
          </div>
          <div>
            <label>Confirmar email</label>
            <input type="email" placeholder="Digite seu email"/>
          </div>
          <div>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha"/>
          </div>
          <div>
            <label>Confirmar senha</label>
            <input type="password" placeholder="Digite sua senha"/>
          </div>
          <button type="submit">Cadastrar</button>
          <p>ja possui uma conta?</p>
          <Link to="/">Login</Link>
        </StyledRegisterForm>
    )
}