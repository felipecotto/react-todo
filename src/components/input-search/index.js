import React from "react"
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const InputSearch = () => (
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Buscar"
      aria-label="Buscar"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Pesquisar</Button>
    </InputGroup.Append>
  </InputGroup>
)

export default InputSearch