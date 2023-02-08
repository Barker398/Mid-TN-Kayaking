import { createContext, useState } from "react"

export const LaunchSiteContext = createContext()

export const LaunchSiteProvider = () => {
    const [launchSites, setLaunchSites] = useState([])

    const getLaunchSites = () => {
        return fetch("http://localhost:8088/launchsites")
            .then(res => res.json())
            .then(setLaunchSites)
    }

    const addLaunchSite = LaunchSiteObj => {
        return fetch("http://localhost:8088/launchSites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(LaunchSiteObj)
        })
            .then(getLaunchSites)
    }

    const removeLaunchSite = launchSiteId => {
        return fetch(`http://localhost:8088/launchSites/${launchSiteId}`, {
            method: "DELETE"
        })
            .then(getLaunchSites)
    }
    return (
        <LaunchSiteContext.Provider value={{
            launchSites, getLaunchSites, addLaunchSite, removeLaunchSite
        }}>

        </LaunchSiteContext.Provider>
    )
}