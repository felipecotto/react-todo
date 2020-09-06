import React from "react"

import styled from "styled-components"

 const MainTitleStyle = styled.h1`
    margin-bottom: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 700;
`

const MainTitle = ({ children }) => (
    <MainTitleStyle>{children}</MainTitleStyle>
)

export default MainTitle

