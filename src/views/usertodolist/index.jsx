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
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();
    const [searchData, setSearch] = useState();
    const [userData, setUserData] = useState();

    useEffect(() => {
      (async () => {
        const res = await UserService(userId )
        setcardDone(res.filter((item)=>item.completed ))
        setcardTodo(res.filter((item)=>!item.completed  ))
      })()
    }, [userId])
    
    useEffect(() => {
      (async () => {
        const user = await UserPerfilService();
        setUserData(InversedDataUsers(user))
      })()
    }, [userId])
    
    return (
      <Layout>
        <TodoContext.Provider value={{
          cardDone,
          cardTodo,
          searchData,
          setSearch ,
          userData  
        }}>
            <UserTitle>Olá  {userData && userData[userId].name} </UserTitle>
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  