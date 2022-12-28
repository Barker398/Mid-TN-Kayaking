import { LaunchSiteContext } from "./LaunchSiteProvider"

export const LaunchSiteList = () => {
    const {getLaunchSites} = useContext(LaunchSiteContext)

    useEffect(() => {
        getLaunchSites()
    }, [])

    return (
        <section className="launchSites">
            <p className="launchSite_list">Launch Sites</p>
        </section>
    )
}