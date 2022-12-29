import { useContext, useEffect } from "react"
import { LaunchSiteContext } from "./LaunchSiteProvider"

export const LaunchSiteList = () => {
    const { launchSites, getLaunchSites } = useContext(LaunchSiteContext)

    useEffect(() => {
        getLaunchSites()
    }, [])

    return (
        <section className="launchSites">
            <p className="launchSite_list">Launch Sites</p>
            {launchSites.map((launchSite) => {
                return (
                    <div className="launchSite" key={launchSite.id} id={`launchSite--${launchSite.id}`}>
                        <h3 className="launchSite__name">
                            {launchSite.name}
                        </h3>
                    </div>
                )
            })}
        </section>

    )
}