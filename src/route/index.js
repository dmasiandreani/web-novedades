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
import NavBar from '../components/NavBar'
export default function Routes(){
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path={["/","/Home"]}>
                    <Home/>
                </Route>
                <Route exact path="/Contratos">
                    <TablaContratos/>
                </Route>
                <Route exact path="/Novedades">
                    <TablaNovedades/>
                </Route>
                <Route>
                    <FourOfour/>   
                </Route>
            </Switch>
        </Router>
    );
}