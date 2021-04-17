// import React from 'react';
// import { makeStyles, createStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import { connect } from 'react-redux';
// import { showToaster } from '../../../../Services/Actions/action';
// import ToggleBtn from '../ToggleBtn';


// const useStyles = makeStyles((theme) =>
//   createStyles({
//     modal: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center'
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 5, 3)
      
//     },
//     modalSize: {
//         width: '60%',
//         maxHeight: '100%',
//         overflow: 'auto'

//     },
//     saveBtn: {
//         display: 'inline-flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: '8px 20px',
//         fontSize: '16px',
//         fontFamily: 'Avenir',
//         borderRadius: '4px',
//         userSelect: 'none',
//         cursor: 'pointer',
//         textAlign: 'center',
//         backgroundColor: 'rgb(62, 148, 228)',
//         border: '1px solid rgb(62, 148, 228)',
//         width: 'auto',
//         minWidth: 'auto',
//         transition: 'all 0.3s ease 0s !important',
//         color: 'white !important',
//     },
//     configBlock: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between'
//     },
//     sectionText: {
//         textTransform: 'uppercase',
//         fontSize: 'small',
//         fontWeight: '600',
//     }
//   }),
// );

// function AddModal(props) {
//     console.log(props);

//     const classes = useStyles();

//     const [templateData, setTemplateData] = React.useState(props.data);

//     const changeChecked = (e, sectionName) => {
//         let tempState = JSON.parse(JSON.stringify(templateData))
//         console.log(e);
//         tempState[sectionName.toString()]['config']['sectionVisible'] = e.target.checked;
//         setTemplateData(tempState)
//     }

//     return (
//         <div>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={props.open}
//                 onClose={() => {props.changeAddModalState(false)}}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                 timeout: 500,
//                 }}
//                 style={{width: '100%'}}
//             >
//                 <Fade in={props.open}>
//                 <div className={classes.paper + ' ' + classes.modalSize}>
//                     <h3 id="transition-modal-title">Add Modal</h3>
//                     <hr />

//                     <div className={classes.configBlock}>
//                     <span className={classes.sectionText}>Show Slider Section</span>
//                         <ToggleBtn isChecked={templateData.slider.config.sectionVisible} updateChecked={(e) => {changeChecked(e,'slider')}}/>
//                     </div>
//                     <div className={classes.configBlock}>
//                     <span className={classes.sectionText}>Show Testimonial Section</span>
//                         <ToggleBtn isChecked={templateData.testimonials.config.sectionVisible} updateChecked={(e) => {changeChecked(e,'testimonials')}}/>
//                     </div>
//                     <div className={classes.configBlock}>
//                     <span className={classes.sectionText}>Show Facilities Section</span>
//                         <ToggleBtn isChecked={templateData.facilities.config.sectionVisible} updateChecked={(e) => {changeChecked(e,'facilities')}}/>
//                     </div>
//                     <div className={classes.configBlock}>
//                     <span className={classes.sectionText}>Show News Section</span>
//                         <ToggleBtn isChecked={templateData.news.config.sectionVisible} updateChecked={(e) => {changeChecked(e,'news')}}/>
//                     </div>
//                     <div className={classes.configBlock}>
//                     <span className={classes.sectionText}>Show Events Section</span>
//                         <ToggleBtn isChecked={templateData.events.config.sectionVisible} updateChecked={(e) => {changeChecked(e,'events')}}/>
//                     </div>
//                     <div>
//                         <button className={classes.saveBtn} onClick={() => {props.updateTemplateData(templateData); props.changeAddModalState(false); props.showNotification(true)}}>Save</button>
//                     </div>
//                 </div>
//                 </Fade>
//             </Modal>
//         </div>
//     )
// }


// const mapStateToProps=state=>({

// })

// const mapDispatchToProps=dispatch=>({
//     showNotification: (data) => dispatch(showToaster(data))
// })


// export default connect(mapStateToProps,mapDispatchToProps)(AddModal)
