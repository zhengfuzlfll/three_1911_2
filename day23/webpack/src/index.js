import React from 'react';
import {
    render
} from 'react-dom';

import APP from './APP'
import { HashRouter } from 'react-router-dom';

render(
    <HashRouter>
        <APP></APP>
    </HashRouter>,
    document.querySelector("#app")
)