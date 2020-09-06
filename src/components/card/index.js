import React from "react"
import { Link } from 'react-router-dom';
import Checkfield from "../checkfield"; 
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

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
    cursor: pointer;
    svg {
        color: #462056;
        font-size: 25px;
    }
`

const Card = ({data}) => {
    const renderTooltip = props => (
    <Tooltip {...props}>Usuário {data.userId}</Tooltip>
      );
    const url = `/users/${data.userId}`
    return(<CardBg>
        <CardList>
            <Checkfield checked = {data?.completed}/>   
            <CardTitle>{data?.title}</CardTitle>
                <Person >
                    <OverlayTrigger placement="top" overlay={renderTooltip}>
                        <Link to= {url}>
                                <BsPersonSquare/>
                        </Link>
                    </OverlayTrigger>
                </Person>
        </CardList>
    </CardBg>)
}

export default Card

