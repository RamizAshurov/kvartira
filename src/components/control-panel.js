import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { UnitContext } from '../hocs/with-unit'

const Title = styled.h3`
    font-size: 28px;
    font-weight: bold;
    line-height: 1.3;
    padding-right: 50px;
    max-width: 350px;
    @media (max-width: 576px) {
        padding-right: 0;
        max-width: 280px
    }
`

const TabPanel = styled.div`
    display: flex;
    gap: 6px;
`

const TabItem = styled.div`
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    &.active {
        font-weight: bold;
        text-decoration: none
    }
`

const ControlPanel = () => {
    const { unit, changeUnit } = useContext(UnitContext);
    const location = useLocation()

    return (
        <div>
            <Title>{ location.pathname === "/" ? "Ближайшие подлеты астероидов" : "Заказ отправлен!" }</Title>
            { location.pathname === "/" && (
                <TabPanel>
                    <TabItem 
                        className={unit === "km" && "active"}
                        onClick={() => changeUnit("km")}>в километрах</TabItem>
                    <div style={{ backgroundColor: "white", alignSelf: "center", width: "2px", height: "12px"}} />
                    <TabItem
                        className={unit === "lo" && "active"}
                        onClick={() => changeUnit("lo")}>в лунных орбитах</TabItem>
                </TabPanel>
            )}

        </div>
    )
}

export default ControlPanel