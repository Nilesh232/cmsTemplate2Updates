import React, { useState } from "react";
import classes from '../css/EventHomeTemplate1Component.module.css';
// import { isAuth } from '../../data/applicationConstant';

import EditModal from '../EditModal';
import { Snackbar } from "@material-ui/core";

import MuiAlert from '@material-ui/lab/Alert';

import { horizontal, vertical } from '../../data/applicationConstant';
import { connect } from "react-redux";
import { updateData } from "../../Services/Actions/actions";
import { sortByKey } from "../../utilities/helper/helper";



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function EventHomeTemplate1Component(props) {
  const data = props.homePageData.events;
  if(data.content && data.content.length) {
    data.content = sortByKey(data.content, 'orderNo');
  }
  let editClass = props.isAuth === true ? 'edit-block' : '';
  const [open, setOpen] = useState(false);
  const [openToaster, setOpenToaster] = useState(false);

  const changeModalStatus = (status) => {
    setOpen(status)
  }

  const changeToasterStatus = (status) => {
    setOpenToaster(status)
  }

  const changeData = (sectionData, sectionName) => {
    props.updateData(sectionData, sectionName)
  } 
  return (
    <>
      <section className={classes.events + ' ' + editClass}>
      {props.isAuth === true ? (
          <div className="edit-icon" onClick={() => {changeModalStatus(true)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 18 18"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
        </div>
        ) : null}
        <div className={classes.container}>
          <h2>{data.config.sectionTitle}</h2>
          
          {data.content.map((val) => (
            <article>
                <div className={classes['current-date']}>
                <p>{val.month}</p>
                <p className={classes.date}>{val.date}</p>
                </div>
                <div className={classes.info}>
                {val.text.map((contentInfo) => (
                <p className={classes.content}>
                    {contentInfo}
                </p>
                ))}
                <a className={classes.more} href="#">
                    Read more
                </a>
                </div>
            </article>
          ))}
          
          <div className={classes.btnHolder}>
            <a className={classes.btn+ ' ' + classes.blue} href="#">
              See all upcoming events
            </a>
          </div>
        </div>
      </section>
      <EditModal open={open} data={data} 
      updateData={changeData} 
      changeModalStatus={changeModalStatus} changeToasterStatus={changeToasterStatus}/>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={openToaster} autoHideDuration={6000} onClose={() => {changeToasterStatus(false)}}>
            <Alert onClose={() => {changeToasterStatus(false)}} severity="info">
                Data Updated!
            </Alert>
      </Snackbar>
    </>
  );
}


const mapStateToProps=state=>({
  isAuth: state.authR.auth
})

const mapDispatchToProps=dispatch=>({
  updateData:(data, sectionName)=>dispatch(updateData(data, sectionName)),
})


export default connect(mapStateToProps,mapDispatchToProps)(EventHomeTemplate1Component)
