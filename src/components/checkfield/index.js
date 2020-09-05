import React from "react"
import { Form } from 'react-bootstrap';

import * as S from "./styled"

const Checkfield = () => (
    <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" />
    </Form.Group>
)

export default Checkfield