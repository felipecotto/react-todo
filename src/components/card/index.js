import React from "react"
import Checkfield from "../checkfield"; 

import styled from "styled-components"
import { BsPersonSquare } from 'react-icons/bs';


const CardBg = styled.div`
  position: relative;
`

 const CardTitle = styled.h3`
    margin-left: 20px;      
    font-family: 'Montserrat', sans-serif;
    font-size: 14px; 
    font-weight: 600;
    padding-right: 40px;
    text-align: left;
`

const CardList = styled.div`
  display: flex; 
  align-items: center;
  background-color: #ffffff;
  padding: 12px;
  margin-bottom: 12px; 
  min-height: 70px;
  color: #333;
`
const Person = styled.figure`
    position: absolute;
    right: 15px;
    top: 22px;
    svg {
        color: #462056;
        font-size: 25px;
    }
`

const Card = ({data}) => (
    <CardBg>
        <CardList>
            <Checkfield checked = {data?.completed}/>
            <CardTitle>{data?.title}</CardTitle>
            <Person>
                <BsPersonSquare/>
            </Person>
        </CardList>
    </CardBg>
)

export default Card

