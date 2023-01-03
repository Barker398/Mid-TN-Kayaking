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
            {activities.map((activities) => {
                return (
                    <div className="activities" key={activities.id} id={`activities--${activities.id}`}>
                        <h3 className="activity__description">
                            {activities.description}
                        </h3>
                    </div>
                )
            })}
        </section>
    )
}