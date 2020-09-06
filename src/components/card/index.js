import React from "react"
import Checkfield from "../checkfield"; 

import styled from "styled-components"

const CardBg = styled.div`
  
`

 const CardTitle = styled.h3`
    margin-left: 20px;      
    font-family: 'Montserrat', sans-serif;
    font-size: 18px; 
    font-weight: 600;
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

const Card = ({data}) => (
    <CardBg>
        <CardList>
            <Checkfield checked = {data?.completed}/>
            <CardTitle>{data?.title}</CardTitle>
        </CardList>
    </CardBg>
)

export default Card

