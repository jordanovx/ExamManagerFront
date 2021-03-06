import React  from 'react';
import {Route, Redirect} from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        (localStorage.getItem("auth_token")!== undefined && localStorage.getItem("auth_token"))
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

export default ProtectedRoute;
