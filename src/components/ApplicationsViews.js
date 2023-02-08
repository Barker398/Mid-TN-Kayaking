import React from "react";
import { Route } from "react-router-dom";
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