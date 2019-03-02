import React, {Fragment} from 'react';
import Header from "../Header/Header";

const Layout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <main className="container py-4">
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;
