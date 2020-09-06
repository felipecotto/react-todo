import React from "react";
import { Container } from 'react-bootstrap';
import styled from "styled-components";

const BoxStyled = styled.section`
    padding: 0 20px;
    background: rgb(139,150,207);
    background: radial-gradient(circle, rgba(139,150,207,1) 0%, rgba(255,170,187,1) 100%);  
    height: 100%;
    min-height: 100vh;
`;

const Content = styled.section`
    padding:  20px;
    border-radius: 7px;
`;

const ContainerStyled = styled(Container)`
    padding: 20px 0;
`;

export const Layout = ({ children }) => (
    <BoxStyled>
        <ContainerStyled fluid>
            <Content>
                {children}
            </Content>
        </ContainerStyled>
    </BoxStyled>
);
