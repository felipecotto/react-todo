import React from "react"
import Checkfield from "../checkfield"; 

import * as S from "./styled"

const Card = () => (
    <S.CardBg>
        <S.CardList>
            <S.CardTitle>Tarefa Lorem Ipsum </S.CardTitle>
            <Checkfield />
        </S.CardList>
        <S.CardList>
            <S.CardTitle>Tarefa Lorem Ipsum </S.CardTitle>
            <Checkfield />
        </S.CardList>
        <S.CardList>
            <S.CardTitle>Tarefa Lorem Ipsum </S.CardTitle>
            <Checkfield />
        </S.CardList>
        <S.CardList>
            <S.CardTitle>Tarefa Lorem Ipsum </S.CardTitle>
            <Checkfield />
        </S.CardList>
    </S.CardBg>
)

export default Card

