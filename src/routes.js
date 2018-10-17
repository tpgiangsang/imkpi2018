import React from 'react';
import LoginContainer from './containers/LoginContainer';
import NotFound from './components/NotFound';
import ProductContainer from './containers/ProductContainer';
import Home from './components/Home';
const routes = [
    {
        path: '/login',
        exact: true,
        main : () => <LoginContainer />
    },
    {
        path: '/products',
        exact: false,
        main : () => <ProductContainer />
    },
    {
        path: '/',
        exact: false,
        main : () => <Home />
    },
    {
        path: '',
        exact: false,
        main : () => <NotFound />
    }
]
export default routes;