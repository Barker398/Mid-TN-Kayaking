import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationsViews";
import { Login } from "./auth/Login";
import { Registeration } from "./auth/Registration"

export const Kayaking = () => {
    <>
       <Route
        render={() => {
          if (localStorage.getItem("Kayaking_user")) {
            return (
              <>
                
                <ApplicationViews/>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registration">
        <Registeration />
      </Route> 
    </>
}