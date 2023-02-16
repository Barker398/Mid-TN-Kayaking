import { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"

export const LocationList = () => {
    const { getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <section className="locations">
            <p className="loaction_list">Kayak Locations</p>
        </section>
    )
}