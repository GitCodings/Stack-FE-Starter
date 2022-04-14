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
    /** This is a hook we will use to keep track of our accessToken and
     * refreshToken given to use when the user calls "login".
     * <br>
     * For now, it is not being used, but we recommend setting the two tokens
     * here to the tokens you get when the user completes the login call (once
     * you are in the .then() function after calling login)
     * <br>
     * These have logic inside them to make sure the accessToken and
     * refreshToken are saved into the local storage of the web browser
     * allowing you to keep values alive even when the user leaves the website
     */
    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();

    const {register, getValues, handleSubmit} = useForm();

    const submitLogin = () => {
        const email = getValues("email");
        const password = getValues("password");

        const payLoad = {
            email: email,
            password: password
        }

        login(payLoad)
            .then(response => alert(JSON.stringify(response.data, null, 2)));
    }

    return (
        <StyledDiv>
            <h1>Login</h1>
            <input {...register("email")} type={"email"}/>
            <input {...register("password")} type={"password"}/>
            <button onClick={handleSubmit(submitLogin)}>Login</button>
        </StyledDiv>
    );
}

export default Login;
