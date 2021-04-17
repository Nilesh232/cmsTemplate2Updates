import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom"


const PrivateRoutes = ({ component: Component, isAuth, ...rest }) => {
    console.log('private routes', isAuth);
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth === true
                    ? (
                        <Component {...props} />
                    )
                    : (
                        <Redirect
                            to={{
                                pathname: "/admin/login",
                                state: { from: props.location },
                            }}
                        />
                    )}
        />
    );
};


const mapStateToProps = state => ({
    isAuth: state.authR.auth
})

const mapDispatchToProps = dispatch => ({ 
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);