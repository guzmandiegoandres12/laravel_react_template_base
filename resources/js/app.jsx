import './bootstrap';
import React from 'react';

import {Provider} from 'react-redux';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import store from './stores/Store';
import '../css/app.scss';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

const AppRender = (App,props)=>{
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(AppRender(App, props), el);
    },
});

InertiaProgress.init({ color: '#4B5563' });