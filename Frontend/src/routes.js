import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Pages
import Home from './Pages/Home'
import Details from './Pages/Details'


export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            {/* External Area */}
            <Route path="/" exact component={Home} />
            <Route path="/details" component={Details}/>

        </Switch>
    </BrowserRouter>
    )
}
