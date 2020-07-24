import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../components/layouts/Home';
import PrivacyPolicy from '../components/layouts/PrivacyPolicy';
import TermConditions from '../components/layouts/TermConditions';

export default props =>(
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/PrivacyPolicy" exact component={PrivacyPolicy} />
        <Route path="/TermConditions" exact component={TermConditions} />
    </Switch>
)