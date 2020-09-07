import React, { useContext } from 'react';
import TodoContext from '../../modules/todolist/contextTodo'
import styled from "styled-components";

import { Row, Col } from 'react-bootstrap';
import Card from '../../components/card'; 
import { useEffect } from 'react';
import { useState } from 'react';

const Todolist = styled.section`
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
    const {cardTodo,cardDone, searchData, userData}  = useContext(TodoContext); 
    const[todo, setTodo] = useState(cardTodo)
    const[done, setDone] = useState(cardDone)
    useEffect(()=>{
        if(searchData) {
            setTodo(cardTodo.filter((item)=>{
                return item.title.search(searchData)>=0
            }))
            setDone(cardDone.filter((item)=>{
                return item.title.search(searchData)>=0
            }))
        }else{
            setTodo(null)
            setDone(null)
        }
    },[cardDone, cardTodo, searchData])

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
                        {userData && cardTodo && (todo && todo !==''?todo:cardTodo).map((item)=> (<Card key={item.id} data={item} user={userData[item.userId]}/>))}
                    </Col>
                    <Col>
                        {userData && cardDone && (done && done !==''?todo:cardDone).map((item)=> (<Card key={item.id} data={item} user={userData[item.userId]}/>))}
                    </Col>
                </Row>
            </TodolistContant>
        </Todolist>
    );
  }
  