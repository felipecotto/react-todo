import React, {useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";
import {Layout} from '../../modules/layout'
import {UserService} from '../../server/services/userTodoList-service'

export default function TodoList(props) {
  // let { userId } = useParams();
  const [oi, setoi] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await UserService()
      setoi(res)
    };
    fetchData()
  })
    return (
      <Layout>
        {console.log(oi)}
      </Layout>
    );
  }
  