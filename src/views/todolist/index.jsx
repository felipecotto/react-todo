import React, {useEffect, useState} from "react";
import {TodoListService} from '../../server/services/todoList-service'
import { TodoProvider } from '../../modules/todolist/contextTodo'
import { Container, Row, Col } from 'react-bootstrap';
import * as S from "./styled"
import {Layout} from '../../modules/layout'
import Card from '../../components/card'; 
import InputSearch from '../../components/input-search'; 


export default function TodoList() {
  // let { userId } = useParams();
    const [cards, setCards] = useState();

    useEffect(() => {
      (async () => {
        const res = await TodoListService()
        setCards(res)
      })()
    }, [])
    
    return (
      <Layout>
        <TodoProvider todolist = {cards}>
          <S.SectionMain>
            <Container> 
              <S.TitleMain>Controle <br/> Suas Tarefas</S.TitleMain>
              <InputSearch/>
                {console.log(cards)}
              <Row>
                <Col><Card/></Col>
                <Col><Card/></Col>
                <Col><Card/></Col>
              </Row>
            </Container>
          </S.SectionMain>
        </TodoProvider>
      </Layout>
    );
  }
  