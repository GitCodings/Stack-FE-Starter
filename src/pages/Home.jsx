import React from "react";
import {useUser} from "hook/User";
import styled from "styled-components";

const StyledDiv = styled.div`
`

const StyledH1 = styled.h1`
`

const Home = () => {
    return (
        <StyledDiv>
            <StyledH1>Home</StyledH1>
        </StyledDiv>
    );
}

export default Home;
