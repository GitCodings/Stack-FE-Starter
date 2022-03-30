import React from "react";
import {useUser} from "hook/User";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {login} from "backend/idm";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledH1 = styled.h1`
`

const StyledInput = styled.input`
`

const StyledButton = styled.button`
`

const Login = () => {
    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();

    const { register, getValues, handleSubmit } = useForm();

    console.log(accessToken, refreshToken);

    const submitLogin = () => {
        const email = getValues("email");
        const password = getValues("password");

        const payLoad = {
            email: email,
            password: password
        }

        login(payLoad)
            .then(response => console.log(response.data));
    }

    return (
        <StyledDiv>
            <StyledH1>Login</StyledH1>
            <StyledInput {...register("email")} type={"email"}/>
            <StyledInput {...register("password")} type={"password"}/>
            <StyledButton onClick={handleSubmit(submitLogin)}>Login</StyledButton>
        </StyledDiv>
    );
}

export default Login;
