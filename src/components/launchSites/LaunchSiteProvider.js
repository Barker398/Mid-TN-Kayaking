import { createContext, useState } from "react"

export const LaunchSiteContext = createContext()

export const LaunchSiteProvider = () => {
    const [launchSites, setLaunchSites] = useState([])

    const getLaunchSites = () => {
        return fetch("http://localhost:8088/launchsites")
        .then(res => res.json())
        .then(setLaunchSites)
    }

    return (
        <LaunchSiteContext.Provider value={{
            launchSites, getLaunchSites
        }}>

        </LaunchSiteContext.Provider>
    )
}