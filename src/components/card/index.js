import React from "react"
import Checkfield from "../checkfield"; 

import * as S from "./styled"

const Card = ({data}) => (
    <S.CardBg>
        <S.CardList>
            <Checkfield />
            <S.CardTitle>{data?.title}</S.CardTitle>
        </S.CardList>
    </S.CardBg>
)

export default Card

