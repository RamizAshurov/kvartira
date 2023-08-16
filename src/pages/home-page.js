import { useContext, useEffect } from 'react';

import { AsteroidsContext } from '../hocs/with-asteroids';

import AsteroidsList from '../components/asteroids-list'
import Cart from '../components/cart'

const HomePage = () => {
    const { asteroids, status, error, getAsteroids, getMoreAsteroids, addToCart } = useContext(AsteroidsContext)

    useEffect(() => {
      if (!asteroids)
        getAsteroids()
    }, [])

    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", marginBottom: "100px"}}>
          { status === "idle" && null }
          { status === "rejected" && <h2>{error}</h2>}
          { status === "loading" && !asteroids && "Loading..." }
          { (status === "recievied" || asteroids) && <AsteroidsList status={status} addToCart={addToCart} asteroids={asteroids} getMoreAsteroids={getMoreAsteroids}/> }
          <Cart count={asteroids ? asteroids.filter(asteroid => asteroid.in_cart).length : 0} />
      </div>
    )
}

export default HomePage