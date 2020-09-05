import React, {useEffect, useState} from "react";
import {TodoListService} from '../../server/services/todoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'


export default function TodoList() {
    const [cards, setCards] = useState();

    useEffect(() => {
      (async () => {
        const res = await TodoListService()
        setCards(res)
      })()
    }, [])
    
    return (
      <Layout>
        <TodoContext.Provider value={{todo: cards}}>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  