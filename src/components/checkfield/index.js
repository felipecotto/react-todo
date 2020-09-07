import React from "react"
import styled from "styled-components"

import { FaCheck } from 'react-icons/fa';


const StyledCheck = styled.input`
    display: none;
    &+ label {
        position: relative;
        border: 1px solid #cacece;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
        padding: 8px;
        border-radius: 3px;
        display: inline-block;
        position: relative;
    }
    &+ label * {
        display:none;
    }
    & + label:active, .regular-checkbox:checked + label:active {
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
    }
    &:checked + label {
        border: 1px solid #adb8c0;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
        color: #99a1a7;
    }
    &:checked + label * {
        display: block
    }
`

const IconCheck = styled(FaCheck)`
    position: absolute;
    top: 1px;
    left: 1px;
    font-size: 14px;
`

const Checkfield = ({checked}) => (
    <>
        <StyledCheck type="checkbox"  checked={checked} />
        <label><IconCheck /></label>
    </>
)

export default Checkfield