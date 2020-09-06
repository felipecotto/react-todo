import React, {useEffect} from "react";
// import {
//   useParams
// } from "react-router-dom";
import {Layout} from '../../modules/layout'
// import {UserService} from '../../server/services/userTodoList-service'

export default function TodoList(props) {
  // let { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // const res = await UserService()
    };
    fetchData()
  })
    return (
      <Layout>
      </Layout>
    );
  }
  