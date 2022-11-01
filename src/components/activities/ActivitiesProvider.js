import { createContext, useState } from "react";


export const ActivityContext = createContext()

export const ActivityProvider = () => {
    const [activities, setActivities] = useState([])

    const getActivities = () => {
        return fetch("http://localhost:8088/activities")
        .then(res => res.json())
        .then(setActivities)   
    }

    const getActivitiesById = () => {
        return fetch(`http://localhost:8088/activities?id=${activityId}`)
        .then(res => res.json())
    }

    return (
        <ActivityContext.Provider value={{
            activities, getActivities, getActivitiesById
        }}>

        </ActivityContext.Provider>
    )
}