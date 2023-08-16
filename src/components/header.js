import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    padding: 16px
`
const Title = styled.h1`
    display: inline-block;
    color: #f86600;
    font-size: 32px;
    line-height: 1;
    margin: 0 0 8px;
    text-transform: uppercase
`

const Header = () => {
    return (
        <Container>
            <Link to="/" style={{ display: "inline-block",}}>
                <Title>Armagedon 2023</Title>
            </Link>
            <p style={{ margin: 0 }}>ООО "Команда им.Б. Уиллиса".<br/>Взрываем астероиды с 1998 года</p>
        </Container>
    )
}

export default Header