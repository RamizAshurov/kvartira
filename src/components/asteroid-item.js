import { useContext, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { UnitContext } from '../hocs/with-unit'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    margin-top: 24px;
`

const Wrapper = styled.div`
    display: flex;
    gap: 8px
`

const AsteroidDate = styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: 1.33;
`

const AsteroidDistance = styled.div`
    font-size: 16px;
    line-height: 1.5;
`

const AsteroidMagnitude = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
`

const AsteroidDiameter = styled.div`
    font-size: 12px;
    font-weight: bold;
    line-height: 1.33;
`

const Button = styled.button`
    background-color: rgba(248, 102, 0, 0.15);
    border-radius: 16px;
    color: #f86600;
    font-size: 11px;
    font-weight: bold;
    line-height: 1.8;
    letter-spacing: 1px;
    padding: 2px 11px;
    text-transform: uppercase;
    transition: background-color 0.15s ease-in, color 0.15s ease-in;
    &:hover:not(.disabled) {
        background-color: rgba(248, 102, 0, 1);
        color: #fff
    }
    &.disabled {
        cursor: auto
    }
`
const Asteroid = (props) => {
    const location = useLocation()
    const { unit } = useContext(UnitContext)
    const { id, name, approach_date, miss_distance, diameter, is_hazardous, magnitude, addToCart, inCart } = props

    const date = new Date(approach_date)

    const monthMap = {
        0: "янв",
        1: "февр",
        2: "мар",
        3: "апр",
        4: "май",
        5: "июн",
        6: "июл",
        7: "авг",
        8: "сен",
        9: "окт",
        10: "ноя",
        11: "дек"
    }

    const handleSubmit = (button, id) => {
        if (button.classList.contains("disabled")) 
            return false
        addToCart(id);
    }

    return (
        <Container>
            <Link to={`/asteroids/${id}`}>
                <AsteroidDate>{`${date.getDate()} ${monthMap[date.getMonth()]} ${date.getFullYear()}`}</AsteroidDate>
            </Link>
            <Wrapper>
                <AsteroidDistance>
                    <div>{
                        unit === "km" 
                            ? `${parseInt(miss_distance.kilometers)} км`
                            : `${parseInt(miss_distance.lunar)} лунных орбит`
                    }
                    </div>
                    <img src="./arrow.svg"/>
                </AsteroidDistance>
                <img src="./asteroid.png" alt="asteroid" style={{alignSelf: "center", width: "36px", height: "auto"}}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <AsteroidMagnitude>{magnitude} FQ</AsteroidMagnitude>
                    <AsteroidDiameter>Ø {parseInt(diameter)} м</AsteroidDiameter>
                </div>
            </Wrapper>
            <div style={{ display: "flex", gap: "8px"}}>
                {location.pathname === "/" && (
                <Button 
                    className={inCart && "disabled"}
                    onClick={(e) => handleSubmit(e.target, id)}
                >{inCart ? "В корзине" : "Заказать"}</Button>
                )}
                {is_hazardous && (
                <div style={{display: "flex", alignItems: "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.44722 18.1056L10.2111 4.57771C10.9482 3.10361 13.0518 3.10362 13.7889 4.57771L20.5528 18.1056C21.2177 19.4354 20.2507 21 18.7639 21H5.23607C3.7493 21 2.78231 19.4354 3.44722 18.1056Z" fill="#E9D502" stroke="#E9D502" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="17" r="1" fill="#000000"/>
                        <path d="M12 10L12 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Опасен</span>
                </div>
                )}

            </div>
        </Container>
    )
}

export default Asteroid