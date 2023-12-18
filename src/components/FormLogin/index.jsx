import { Link } from "react-router-dom";
import { StyledLoginForm } from "./styles";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export function FormLogin() {
  const { loginUser, user, setUser, loading, erroLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  function submit(data) {
    loginUser(data);
  }
  return (
    <StyledLoginForm
      loading={loading}
      noValidate
      onSubmit={handleSubmit(submit)}
    >
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input
          className={errors.email && "error-input"}
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Senha</label>
        <input
          className={errors.password && "error-input"}
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      {erroLogin && !loading && <span>Email ou senha invalidos</span>}
      <button disabled={loading} type="submit">
        {loading ? <div className="spinner"></div> : "Entrar"}
      </button>
      <p>Ainda não possui uma conta?</p>
      <Link to="/register">Cadastre-se</Link>
    </StyledLoginForm>
  );
}
