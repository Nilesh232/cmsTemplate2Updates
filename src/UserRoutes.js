import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";    
import HomeTemplate1Container from './Template1/containers/HomeTemplate1Container';
import EventTemplate1Container from './Template1/containers/EventTemplate1Container';
import NewsTemplate1Container from './Template1/containers/NewsTemplate1Container';
import GalleryTemplate1Container from './Template1/containers/GalleryTemplate1Container';
import FacilityTemplate1Container from './Template1/containers/FacilityTemplate1Container';
import ContactTemplate1Container from './Template1/containers/ContactTemplate1Container';
import FeeStructureTemplate1Container from './Template1/containers/FeeStructureTemplate1Container';
import AdmissionProcessTemplate1Container from './Template1/containers/AdmissionProcessTemplate1Container';
import TeachingTemplate1Container from './Template1/containers/TeachingTemplate1Container';
import RulesTemplate1Container from './Template1/containers/RulesTemplate1Container';
import CuricullumTemplate1Container from './Template1/containers/CuricullumTemplate1Container';
import CommitteeTemplate1Container from './Template1/containers/CommitteeTemplate1Container';
import PrincipalMessageTemplate1Container from './Template1/containers/PrincipalMessageTemplate1Container';
import StrengthTemplate1Container from './Template1/containers/StrengthTemplate1Container';
import TeacherTemplate1Container from './Template1/containers/TeacherTemplate1Container';
import MissionTemplate1Container from './Template1/containers/MissionTemplate1Container';
import VideoGalleryTemplate1Container from './Template1/containers/VideoGalleryTemplate1Container';
import { connect } from 'react-redux';
import HomeTemplate2Container from './Template2/containers/HomeTemplate2Container';

const UserRoutes =(props)=> {
    
    console.log('routes', props)
    return (
       <BrowserRouter>
            <Switch>
                {props.getTemplateSelected.templateSelected === 'template1' ? (
                    <>
                    <Route path="/template1/home" exact component={HomeTemplate1Container} />
                    <Route path="/template1/events" exact component={EventTemplate1Container} />
                    <Route path="/template1/news" exact component={NewsTemplate1Container} />
                    <Route path="/template1/gallery" exact component={GalleryTemplate1Container} />
                    <Route path="/template1/facility" exact component={FacilityTemplate1Container} />
                    <Route path="/template1/contact" exact component={ContactTemplate1Container} />
                    <Route path="/template1/fee" exact component={FeeStructureTemplate1Container} />
                    <Route path="/template1/admissionprocess" exact component={AdmissionProcessTemplate1Container} />
                    <Route path="/template1/teachingmethodology" exact component={TeachingTemplate1Container} />
                    <Route path="/template1/rules" exact component={RulesTemplate1Container} />
                    <Route path="/template1/curicullum" exact component={CuricullumTemplate1Container} />
                    <Route path="/template1/committee" exact component={CommitteeTemplate1Container} />
                    <Route path="/template1/principalmessage" exact component={PrincipalMessageTemplate1Container} />
                    <Route path="/template1/strength" exact component={StrengthTemplate1Container} />
                    <Route path="/template1/teacher" exact component={TeacherTemplate1Container} />
                    <Route path="/template1/mission" exact component={MissionTemplate1Container} />
                    <Route path="/template1/video" exact component={VideoGalleryTemplate1Container} />
                    </>
                ) : (
                    <>
                    {props.getTemplateSelected.templateSelected === 'template2' ? (
                        <>
                        <Route path="/template2/home" exact component={HomeTemplate2Container} />

                        </>
                    ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRoutes);
