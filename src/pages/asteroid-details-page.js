import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetching } from '../hooks/useFetching';
import { fetchAsteroidDetails } from '../api/api';

import CloseApproachDataCard from '../components/date-card';

const AsteroidDetailsPage = () => {
    const [asteroid, setAsteroid] = useState(null)
    const { id } = useParams()

    const [status, error, fetchAsteroidById] = useFetching(async function (id) {
        const asteroid = await fetchAsteroidDetails(id)
        setAsteroid(asteroid)
    })

    useEffect(() => {
        fetchAsteroidById(id)
    }, [])

    if (status === "idle")
        return null

    if (status === "loading")
        return <p>Loading...</p>
    
    if (status === "recievied" && !asteroid) 
        return <h2>Такого астероида не существует</h2>

    if (status === "rejected")
        return <h2 style={{color: "tomato"}}>Error!!!</h2>

    const { name, close_approach_data } = asteroid

    return (
        <>
            <h3 style={{ fontSize: "36px", padding: "0 16px"}}>Даты приближения астреоида <span style={{fontWeight: "bold", textDecoration: "underline"}}>{name}</span></h3>
            <div style={{
                margin: "0 auto",
                padding: "0 15px",
                width: "100%",
                maxWidth: "480px"
            }}>
                {
                    close_approach_data.map(data => <CloseApproachDataCard key={data.close_approach_date} data={data}/>)
                }
            </div>
        </>
    )
}

export default AsteroidDetailsPage