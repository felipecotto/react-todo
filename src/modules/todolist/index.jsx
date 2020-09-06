import React  from "react";
// import {TodoConsumer} from '../../modules/todolist/contextTodo'

import { Container, Row, Col } from 'react-bootstrap';
import * as S from "./styled"
import Card from '../../components/card'; 
import InputSearch from '../../components/input-search'; 
import TodoListItem from "../todolistitem";


export default function TodoListModule() {
    
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
            <TodoListItem/>
        </Container>
        </S.SectionMain>
    );
  }
  