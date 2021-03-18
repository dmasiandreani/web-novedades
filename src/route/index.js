import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*imports para rutas*/
import FourOfour from '../views/404';
import Home from '../views/Home';
import TablaContratos from '../views/TablaContratos';
import TablaNovedades from '../views/TablaNovedades';
export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/TablaContratos">
                    <TablaContratos/>
                </Route>
                <Route exact path="/TablaNovedades">
                    <TablaNovedades/>
                </Route>
                <Route>
                    <FourOfour/>   
                </Route>
            </Switch>
        </Router>
    );
}