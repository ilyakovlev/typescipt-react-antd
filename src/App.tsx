import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/containers/User";
import About from "./About/About";


class App extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/about" component={About} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default App;
