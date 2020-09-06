import React, {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";
import InputSearch from '../../components/input-search'; 
import {TodoListService} from '../../server/services/todoList-service'
import TodoContext from '../../modules/todolist/contextTodo'
import {Layout} from '../../modules/layout'
import TodoListModule from '../../modules/todolist'


export default function TodoList() {

  let { userId } = useParams();
  console.log(userId)
    const [cardDone, setcardDone] = useState();
    const [cardTodo, setcardTodo] = useState();
    const [searchData, setSearch] = useState();

    useEffect(() => {
      (async () => {
        const res = await TodoListService()
        setcardDone(res.filter((item)=>item.completed && parseInt(item.userId) === parseInt(userId)))
        setcardTodo(res.filter((item)=>!item.completed && parseInt(item.userId) === parseInt(userId) ))
      })()
    }, [userId])
    
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
            <h3>Usuário {userId}</h3>
            <InputSearch/>
          <TodoListModule/>
        </TodoContext.Provider>
      </Layout>
    );
  }
  