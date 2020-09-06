import React, { useContext } from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import TodoContext from '../../modules/todolist/contextTodo'
import styled from "styled-components";

const Todolist = styled.section`
    height: 100vh;
    background: rgba(255,255,255,0.3)
`;
const Input = styled(InputGroup)`
  padding: 25px 10px;
`

const InputSearch = () => {

  const dataList  = useContext(TodoContext); 

  function setSearch(data) {
    dataList.setSearch(data.target.value)
  }
  
  return (
    <Form>
      <InputGroup className="mb-3" value={dataList.search} onChange={setSearch}>
      <FormControl
        placeholder="Procure uma tafera!"
        aria-label="Buscar"
        aria-describedby="basic-addon2"
      />
    </InputGroup>
  </Form>

  )
}

export default InputSearch