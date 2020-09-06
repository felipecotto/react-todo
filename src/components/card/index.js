import React from "react"
import Checkfield from "../checkfield"; 

import * as S from "./styled"

const Card = () => (
    <S.CardBg>
        <S.CardList>
            <Checkfield />
            <S.CardTitle>Tarefa Lorem Ipsum </S.CardTitle>
        </S.CardList>
    </S.CardBg>
)

export default Card

