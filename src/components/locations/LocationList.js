import { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationsProvider"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    // const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <section className="locations">
            <p className="loaction_list">Kayak Locations</p>
        </section>
    )
}