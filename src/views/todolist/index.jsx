import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import * as S from "./styled"
import Card from '../../components/card'; 
import InputSearch from '../../components/input-search'; 


export default function TodoList() {
    return (
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
    );
  }
  