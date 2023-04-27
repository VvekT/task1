import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import App from './components/app/App.js'
import { store } from './store/index';
import { customPageData } from './utils/customPageData'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CSSReset from '@tds/core-css-reset'
import './index.scss';
import LoaderContextProvider from './components/context/LoadContextProvider.js';
import LoaderNotifyContextProvider from './components/context/LoadContextNotification.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
render(
    <Provider store={store}>
        <Router>
            <CSSReset />
            <LoaderContextProvider>
                <LoaderNotifyContextProvider>
                    <App customPageData={customPageData} />
                </LoaderNotifyContextProvider>
            </LoaderContextProvider>

        </Router>
        <Toaster />
    </Provider>, document.getElementById('root')
);