import React, { useContext } from 'react';
import TodoContext from '../../modules/todolist/contextTodo'
import styled from "styled-components";

import { Row, Col } from 'react-bootstrap';
import Card from '../../components/card'; 

const Todolist = styled.section`
    height: 100vh;
    background: rgba(255,255,255,0.3)
`;
const TodolistTitle = styled.section`
    background: #462056;
    padding: 15px 0;
    color: #ffffff;
    text-align: center;
`;
const TodolistContant = styled.section`
    padding: 15px;
    color: #ffffff;
    text-align: center;
`;
export default function TodoListModule() {
    const dataList  = useContext(TodoContext); 
    console.log(dataList)
    return (
        <Todolist>
            <TodolistTitle>
                <Row>
                    <Col>TODO</Col>
                    <Col>DONE</Col>
                </Row>
            </TodolistTitle>
            <TodolistContant>
                <Row>
                    <Col>
                        
                    </Col>
                    <Col><Card/></Col>
                </Row>
            </TodolistContant>
        </Todolist>
    );
  }
  