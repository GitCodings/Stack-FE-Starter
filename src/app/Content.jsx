import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "pages/Login";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  width: calc(100vw - 50px);
  height: calc(100vh - 110px);
  padding: 25px;

  background: #ffffff;
  box-shadow: inset 0 3px 5px -3px #000000;
`

const Content = () => {
    return (
        <StyledDiv>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </StyledDiv>
    );
}

export default Content;
