import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Admin from './Admin';
import Login from './Login';
import Base from './Base';
import Error from './Error';
import Template1Container from './Template1/containers/Template1Container';
import { connect } from 'react-redux';
import Template2Container from './Template2/containers/Template2Container';


const Routes =(props)=> {
    console.log("routes k props",props)
    return (
       <BrowserRouter>
            <Switch>
                {props.getTemplateSelected.templateSelected === 'template1' ? (
                    <>
                    <Route path="/template1" component={Template1Container} />
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/admin/login" exact component={Login} />
                    <Route path="/admin/error" exact component={Error} />
                    <Base />
                    </>
                ) : (
                    <>
                    {props.getTemplateSelected.templateSelected === 'template2' ? (
                        <>
                        <Route path="/template2" component={Template2Container} />
                        <Route path="/admin" exact component={Admin} />
                        <Route path="/admin/login" exact component={Login} />
                        <Route path="/admin/error" exact component={Error} />
                        <Base />
                        </>
                    ) : null }
                    </>
                )}
            </Switch>
       </BrowserRouter>
    )
}



const mapStateToProps = state => ({
    getTemplateSelected: state.templateSelectedR

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

