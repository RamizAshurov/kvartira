import { useContext } from 'react'

import { AsteroidsContext } from '../hocs/with-asteroids'

import AsteroidsList from '../components/asteroids-list'

const CartPage = () => {
    const { asteroids } = useContext(AsteroidsContext)

    if (!asteroids)
        return <h2 style={{textAlign: "center"}}>Корзина пуста</h2>

    const asteroidsInCart = asteroids.filter(asteroid => asteroid.in_cart)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <AsteroidsList asteroids={asteroidsInCart}/>
        </div>
    )

}

export default CartPage