import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import Country from "./Country/Country";
import IndexPage from './Index/IndexPage';
import PlacesPage from './Places/PlacesPage';


class App extends React.Component {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' component={IndexPage}/>
                    <Route exact={true} path='/places' component={PlacesPage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/places/:id' component={Country}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
