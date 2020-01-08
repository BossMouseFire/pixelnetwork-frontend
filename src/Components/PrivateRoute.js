import React from 'react';
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    const set = document.cookie.match(new RegExp(
        "(?:^|; )" + 'set'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return (
        <Route
            {...rest}
            render={props =>
                set ? (
                    <Component {...props}/>
                ) :
                    <Redirect to={"/login/"}
                    />
            }
        />
    )
};
export default PrivateRoute;