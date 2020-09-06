import React, { useContext } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import TodoContext from '../../modules/todolist/contextTodo'


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