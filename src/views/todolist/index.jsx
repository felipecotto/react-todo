import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as S from "./styled"
import {Layout} from '../../modules/layout'
import Card from '../../components/card'; 
import InputSearch from '../../components/input-search'; 


export default function TodoList() {
    return (
      <Layout>
        <S.SectionMain>
          <Container>
            <S.TitleMain>Controle <br/> Suas Tarefas</S.TitleMain>
            <InputSearch/>
            <Row>
              <Col><Card/></Col>
              <Col><Card/></Col>
              <Col><Card/></Col>
            </Row>
          </Container>
          </S.SectionMain>
      </Layout>
    );
  }
  