import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().required("Este campo é obrigatorio").email("O email é invalido"),
    password: yup.string().required("Este campo é obrigatorio")
})

export const registerSchema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatio"),
    email: yup.string().required("Este campo é obrigatio").email("O email digitado é ivalido"),
    confirmEmail: yup.string().required("Este campo é obrigatorio").email("O email digitado é ivalido").oneOf([yup.ref("email"), null], "Os email não correspondem"),
    password: yup.string().required("Este campo é obrigatio").min(8, "A senha precisa ter no minimo 8 caracteres"),
    confirmPassword: yup.string().required("Este campo é obrigatorio").oneOf([yup.ref("password"), null], "As senhas não correspondem"),
})