import React from "react";
import { LocationProvider } from "./locations/LocationsProvider";

export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <Route path="/locations">
                    
                </Route>
            </LocationProvider>
        </>
    )
}