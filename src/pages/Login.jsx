import React from "react";
import {useUser} from "hook/User";
import styled from "styled-components";

const StyledDiv = styled.div`
`

const StyledH1 = styled.h1`
`

const Login = () => {
    const {
        accessToken, setAccessToken,
        refreshToken, setRefreshToken
    } = useUser();

    return (
        <StyledDiv>
            <StyledH1>Login</StyledH1>
        </StyledDiv>
    );
}

export default Login;
