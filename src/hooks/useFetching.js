import { useState } from 'react'

const useFetching = (callback) => {
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(false)

    const fetchData = async (...args) => {
        try {
            setStatus("loading")
            await callback(...args)
            setStatus("recievied")
        } catch (error) {
            setError(error)
            setStatus("rejected")
        }
    }

    return [status, error, fetchData]
}

export { useFetching }