import React, {useEffect, useState} from "react";

// import {TitleMain} from "./styled"
import InputSearch from '../../components/input-search'; 
import {TodoListService} from '../../server/services/todoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'


export default function TodoList() {
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();

    useEffect(() => {
      (async () => {
        const res = await TodoListService()
        res.map((item) => {
          if(item.completed) {
            return setcardTodo({...cardTodo, item})
          }
          console.log( 'ßßentrou')
          return setcardDone(item)
        })
      })()
    }, [])
    
    return (
      <Layout>
        <TodoContext.Provider value={{
          cardDone,
          setcardDone,
          cardTodo,
          setcardTodo
        }}>
          {/* <TitleMain>Controle <br/> Suas Tarefas</TitleMain> */}
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  