import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #232526;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 16px;
    position: sticky;
    top: 76px;
    @media screen and (max-width: 576px) {
        border-radius: 0;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0;
        position: fixed;
        top: auto;
        left: 0;
        right: 0;
        bottom: 0;
    }
`
const Title = styled.p`
    font-weight: bold;
    margin: 0;
`
const Button = styled.div`
    background-color: rgb(248, 102, 0);
    border-radius: 40px;
    display: block;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
    padding: 12px 16px;
    transition: background-color 0.15s ease-in;
    &:hover {
        background-color: rgba(124, 51, 0)
    }
`


const Cart = (props) => {    
    const navigate = useNavigate()
    const { count } = props

    const handleClick = () => {
        navigate("/cart")
        return false 
    }
    return (
        <Container>
            <div>
                <Title>Корзина</Title>
                <span>{count} астероида</span>
            </div>
            <Button type="button" onClick={handleClick}>Отправить</Button>
        </Container>
    )
}

export default Cart