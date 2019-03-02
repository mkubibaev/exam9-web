import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Contacts} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
