import React from "react";
import { Container } from 'react-bootstrap';
import styled from "styled-components";

const BoxStyled = styled.section`
    background: rgb(139,150,207);
    background: radial-gradient(circle, rgba(139,150,207,1) 0%, rgba(255,170,187,1) 100%);
    height: 100vh
`;

const Content = styled.section`
    padding:  20px;
    border-radius: 7px;
    background: rgba(255,255,255,0.3)
`;

const ContainerStyled = styled(Container)`
    padding: 20px 0;
`;

export const Layout = ({ children }) => (
    <BoxStyled>
        <ContainerStyled>
            <Content>
                {children}
            </Content>
        </ContainerStyled>
    </BoxStyled>
);
