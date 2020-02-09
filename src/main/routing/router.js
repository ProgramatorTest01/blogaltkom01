import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../home";
import Author from "../author";

export default function RouterNavigation() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/author">Author</Link>
                    </li>

                </ul>

                <hr/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/author">
                        <Author/>
                    </Route>


                </Switch>

            </div>
        </Router>
    );
}







