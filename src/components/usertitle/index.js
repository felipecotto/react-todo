import React from "react"

import styled from "styled-components"

 const UserTitleStyle = styled.h1`
    margin-bottom: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 700;
`

const UserTitle = ({ children }) => (
    <UserTitleStyle>{children}</UserTitleStyle>
)

export default UserTitle

