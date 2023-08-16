import { createContext, useState } from 'react'
import { useFetching } from '../hooks/useFetching';
import { fetchAsteroids } from '../api/api';

import { formatDate } from '../utils'

const AsteroidsContext = createContext();

const AsteroidsProvider = ({children}) => {
    const [asteroids, setAsteroids] = useState(null);
    const [date, setDate] = useState(new Date())

    const addToCart = asteroidId => {
        const asteroidIdx = asteroids.findIndex(asteroid => asteroid.id === asteroidId)
        const currentAsteroid = asteroids[asteroidIdx]
        currentAsteroid.in_cart = true
        setAsteroids([
          ...asteroids.slice(0, asteroidIdx),
          currentAsteroid,
          ...asteroids.slice(asteroidIdx + 1)]
        )
    }

    const [status, error, fetchAsteroidsData] = useFetching(async function(date) {
        const formattedDate = formatDate(date)
        const asteroidsData = await fetchAsteroids(formattedDate)
        setAsteroids(prevState => {
            
            if (prevState && prevState[0].id !== asteroidsData[0].id)
            return [...prevState, ...asteroidsData]
            return asteroidsData
        })
    })

    const getMoreAsteroids = (e) => {
        if (e.target.classList.contains("disbaled")) 
          return 
        date.setDate(date.getDate() + 1)
        fetchAsteroidsData(date)
    }
  
    const getAsteroids = () => fetchAsteroidsData(date)

    const getAsteroidById = (id) => asteroids.find(asteroid => asteroid.id === id)

    return (
        <AsteroidsContext.Provider value={{ asteroids, status, error, getAsteroids, getMoreAsteroids, getAsteroidById, addToCart }}>{children}</AsteroidsContext.Provider>
    )
}

export { AsteroidsContext, AsteroidsProvider }