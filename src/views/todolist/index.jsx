import React, {useEffect, useState} from "react";
import InputSearch from '../../components/input-search'; 
import {TodoListService} from '../../server/services/todoList-service'
import {UserPerfilService, InversedDataUsers} from '../../server/services/userTodoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'


export default function TodoList() {
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();
    const [searchData, setSearch] = useState();
    const [userData, setSuserData] = useState();

    useEffect(() => {
      (async () => {
        const items = await TodoListService()
        setcardDone(items.filter((item)=>item.completed))
        setcardTodo(items.filter((item)=>!item.completed))
      })()
    }, [])
    
    useEffect(() => {
      (async () => {
        const user = await UserPerfilService();
        setSuserData(InversedDataUsers(user))
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
          setSearch,
          userData  
        }}>
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  