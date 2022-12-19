import { lazy, LazyExoticComponent } from 'react';

import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
};

const LazyLayaout = lazy( () => import(/* webpackChunkName: "LazyLayaout" */ '../01-lazyload/layout/LazyLayaout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayaout,
        name: 'LazyLayaout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]