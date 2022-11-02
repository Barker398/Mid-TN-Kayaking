import { useContext, useEffect } from "react"
import { ActivityContext } from "./ActivitiesProvider"


export const ActivitiesList = () => {
    const {getActivities} = useContext(ActivityContext)

    useEffect(() => {
        getActivities()
    }, [])
}