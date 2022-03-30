import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "pages/Login";
import Home from "pages/Home";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 25px;

  background: #ffffff;
  box-shadow: inset 0 3px 5px -3px #000000;
`

const Content = () => {
    return (
        <StyledDiv>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </StyledDiv>
    );
}

export default Content;
