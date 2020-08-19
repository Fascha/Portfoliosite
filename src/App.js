import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes/routes";
import { mainTheme } from "./themes/mainTheme";
import { CssBaseline } from "@material-ui/core";

export default function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
            404 or fallback site as last element in routes.jsx
            */}
                    <Switch>
                        {routes.map((route, i) => (
                            <Route path={route["endpoint"]} key={i}>
                                {route["component"]}
                            </Route>
                        ))}
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    );
}
