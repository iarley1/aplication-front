import { Link } from "react-router-dom";
import { StyledRegisterForm } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schemas";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const { registerUser, loading, erroRegister, sucessMessage } = useContext(UserContext);

  function submit(data) {
    registerUser(data);
  }
  return (
    <StyledRegisterForm
      loading={loading}
      noValidate
      onSubmit={handleSubmit(submit)}
    >
      <h2>Cadastro</h2>
      <div>
        <label>Nome Completo</label>
        <input
          className={errors.name && "error-input"}
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
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
        <label>Confirmar email</label>
        <input
          className={errors.confirmEmail && "error-input"}
          type="email"
          placeholder="Digite seu email"
          {...register("confirmEmail")}
        />
        {errors.confirmEmail && <span>{errors.confirmEmail.message}</span>}
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
      <div>
        <label>Confirmar senha</label>
        <input
          className={errors.confirmPassword && "error-input"}
          type="password"
          placeholder="Digite sua senha"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      {sucessMessage && !erroRegister && !loading && <span className="sucess-span">Conta criada com sucesso</span>}
      {erroRegister && !sucessMessage && !loading && <span>Ja existe um conta criada com esse email</span>}
      <button disabled={loading} type="submit">
        {loading ? <div className="spinner"></div> : "Cadastrar"}
      </button>
      <p>ja possui uma conta?</p>
      <Link to="/">Login</Link>
    </StyledRegisterForm>
  );
}
