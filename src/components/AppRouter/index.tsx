import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import App from '../../App'
import Page1 from '../../pages/page_1'
import Page2 from '../../pages/page_2'
import Page3 from '../../pages/page_3'

const AppRouter = () => {
    return (
        <Switch>
            <Route path = '/page1'>
                <Page1/>
            </Route>
            <Route path = '/page2'>
                <Page2/>
            </Route>
            <Route path = '/page3'>
                <Page3/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}

export default AppRouter
