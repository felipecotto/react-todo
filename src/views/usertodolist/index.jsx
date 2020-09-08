import React, {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";
import InputSearch from '../../components/input-search'; 
import {UserService, UserPerfilService, InversedDataUsers} from '../../server/services/userTodoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'
import UserTitle from '../../components/usertitle'


export default function TodoList() {

  let { userId } = useParams();
    const [tasks, setTasks] = useState();
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();
    const [searchData, setSearch] = useState();
    const [userData, setSuserData] = useState();
    useEffect(() => {
      (async () => {
        const items = await UserService(userId )
        setTasks(items)
      })()
    }, [userId])
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
            <UserTitle>Olá  {userData && userData[userId].name} </UserTitle>
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  