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

    const addActivity = activityObj => {
        return fetch("http://localhost:8088/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(activityObj)
        })
            .then(getActivities)
    }

    const removeActivity = activityId => {
        return fetch(`http://localhost:8088/${activityId}`, {
            method: "DELETE"
        })
            .then(getActivities)
    }

    return (
        <ActivityContext.Provider value={{
            activities, getActivities, getActivitiesById, addActivity, removeActivity
        }}>

        </ActivityContext.Provider>
    )
}