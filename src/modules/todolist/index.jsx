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
    const { cardTodo, cardDone, searchData, userData, setTasks, tasks}  = useContext(TodoContext); 
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
    
    function handleStateCard(id){
        const newTask = tasks.map(item=>{
            if(item.id === id) {
                item.completed =  !item.completed
            }
           return item
        })
        setTasks(newTask)
    }

    function cardGenerate(tasks, insideList){
        return (
            userData &&
            tasks && 
            (insideList? insideList : tasks)
            .map((item, id)=> (
                <Card 
                    key={id}
                    data={item}
                    user={userData[item.userId]}
                    handleStateCard={()=>handleStateCard(item.id)}
                />
            ))
        )
    }

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
                        {cardGenerate(cardTodo, todo)}
                    </Col>
                    <Col>
                        {cardGenerate(cardDone, done)}
                    </Col>
                </Row>
            </TodolistContant>
        </Todolist>
    );
  }
  