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
    const [searchData, setSearch] = useState();

    useEffect(() => {
      (async () => {
        const res = await TodoListService()
        setcardDone(res.filter((item)=>item.completed))
        setcardTodo(res.filter((item)=>!item.completed))
      })()
    }, [])
    
    return (
      <Layout>
        <TodoContext.Provider value={{
          cardDone,
          setcardDone,
          cardTodo,
          setcardTodo,
          searchData,
          setSearch 
        }}>
          {/* <TitleMain>Controle <br/> Suas Tarefas</TitleMain> */}
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  