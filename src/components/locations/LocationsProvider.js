import { createContext, useState } from "react";

export const LocationContext = createContext()

export const LocationProvider = () => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const getLocationById = (locationId) => {
        return fetch(`http://localhost:8088/locations?id=${locationId}`)
            .then(res => res.json())
    }

    const addLocation = locationObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
            .then(getLocations)
    }

    const removeLocation = locationId => {
        return fetch(`http://localhost:8088/locations/${locationId}`, {
            method: "DELETE"
        })
            .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, getLocationById, addLocation, removeLocation
        }}>

        </LocationContext.Provider>
    )
}