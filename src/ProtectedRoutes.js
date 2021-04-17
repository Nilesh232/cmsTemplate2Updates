import React from 'react';

import PrivateRoutes from './PrivateRoutes';
import Screen from './Screen';
import Template from './Template';

import Template1Container from './Template1/containers/Template1Container';
import Template2Container from './Template2/containers/Template2Container';
import { connect } from 'react-redux';

function ProtectedRoutes(props) {

    return (
        <>
        <PrivateRoutes path="/admin/template" exact component={Template} />
        <PrivateRoutes path="/admin/screen" exact component={Screen} />

        {props.getTemplateSelected.templateSelected === 'template1' ? (
            <>
                <PrivateRoutes path="/admin/template1" component={Template1Container} />
            </>
        ) : (
            <>
            {props.getTemplateSelected.templateSelected === 'template2'? (
                <>
                    <PrivateRoutes path="/admin/template2" component={Template2Container} />
                </>
            ) : null}
            </>
        )}
        </>
    )
}


const mapStateToProps = state => ({
    getTemplateSelected: state.templateSelectedR

})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoutes);

