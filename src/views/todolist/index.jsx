import React, {useEffect, useState} from "react";
import InputSearch from '../../components/input-search'; 
import {TodoListService} from '../../server/services/todoList-service'
import {UserPerfilService, InversedDataUsers} from '../../server/services/userTodoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'


export default function TodoList() {
    const [tasks, setTasks] = useState();
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();
    const [searchData, setSearch] = useState();
    const [userData, setSuserData] = useState();

    useEffect(() => {
      (async () => {
        const items = await TodoListService()
        setTasks(items)
      })()
    }, [])

    useEffect(() => {
      console.log(tasks)
      tasks && setcardDone(tasks.filter((item)=>item.completed))
      tasks && setcardTodo(tasks.filter((item)=>!item.completed))
    }, [tasks])
    
    useEffect(() => {
      (async () => {
        const user = await UserPerfilService();
        setSuserData(InversedDataUsers(user))
      })()
    }, [tasks])
    
    return (
      <Layout>
        <TodoContext.Provider value={{
          cardDone,
          cardTodo,
          searchData,
          setSearch,
          userData, 
          setTasks,
          tasks  
        }}>
          <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  