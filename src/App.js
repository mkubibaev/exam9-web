import React, {Component} from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import AddEditContact from "./containers/AddEditContact/AddEditContact";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Contacts} />
                    <Route path="/add"  component={AddEditContact} />
                    <Route path="/edit/:id" component={AddEditContact} />
                    <Route render={() => <h1>404</h1>} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
