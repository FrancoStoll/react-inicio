import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";




type JSXComponent = () => JSX.Element;



interface Route {
    to: string;
    path: string;
    name: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}


// Lazyload

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))
const lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'))



export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }

]