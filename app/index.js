import React from 'react';
import dva from './utils/dva';
import Router, { routerMiddleware } from './router';

import accountModel from './models/account';
import routerModel from './models/router';
import inTheatersModel from './models/inTheaters';

console.ignoredYellowBox = [
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillUpdate is deprecated',
];

const app = dva({
    initialState: {},
    models: [accountModel, routerModel, inTheatersModel],
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e);
    },
});

const App = app.start(<Router />);

export default App;
