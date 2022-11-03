import { useContext, useEffect } from "react"
import { ActivityContext } from "./ActivitiesProvider"


export const ActivitiesList = () => {
    const {getActivities} = useContext(ActivityContext)

    useEffect(() => {
        getActivities()
    }, [])

    return (
        <section className="activities">
            <p className="activity_list">Activities</p>
        </section>
    )
}