import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({store}) => (
        <Provider store={store}>
            <h1>IdeaBooster, here is root</h1>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
)

export default Root;