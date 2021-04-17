import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { updateData } from '../Services/Actions/actions';
import ToggleButton from './ToggleButton';


const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
      
    },
    modalSize: {
        width: '60%',
        maxHeight: '100%',
        overflow: 'auto'

    },
    saveBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 20px',
        fontSize: '16px',
        fontFamily: 'Avenir',
        borderRadius: '4px',
        userSelect: 'none',
        cursor: 'pointer',
        textAlign: 'center',
        backgroundColor: 'rgb(62, 148, 228)',
        border: '1px solid rgb(62, 148, 228)',
        width: 'auto',
        minWidth: 'auto',
        transition: 'all 0.3s ease 0s !important',
        color: 'white !important',
    },
    configBlock: {
        display: 'flex',
        alignItems: 'center'
    },
    sectionText: {
        textTransform: 'uppercase',
        fontSize: 'small',
        fontWeight: '600',
    }
  }),
);

function EditNavModal(props) {

    const classes = useStyles();

    const [sectionData, setSectionData] = React.useState(props.data);

    const changeValue = (e, fLevel, sLevel, idx, tLevel = null, kdx = null) => {
        let tempState = JSON.parse(JSON.stringify(sectionData))
        const {name, value} = e.target;
        if(tLevel != null && kdx != null) {
            tempState[fLevel.toString()][idx][sLevel.toString()][kdx][tLevel] = value;
        } else {
            tempState[fLevel.toString()][idx][sLevel.toString()] = value;
        }
        setSectionData(tempState)
    }

    const changeChecked = (e, fLevel, sLevel,  idx, tLevel = null, kdx=null) => {
        let tempState = JSON.parse(JSON.stringify(sectionData))
        console.log(e);
        if(kdx != null && tLevel != null) {
        tempState[fLevel.toString()][idx][sLevel.toString()][kdx][tLevel] = e.target.checked;
        } else {
            tempState[fLevel.toString()][idx][sLevel.toString()] = e.target.checked;
        }
        setSectionData(tempState)
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={() => {props.changeModalStatus(false)}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                style={{width: '100%'}}
            >
                <Fade in={props.open}>
                <div className={classes.paper + ' ' + classes.modalSize}>
                    <h3 id="transition-modal-title">Edit Model</h3>
                    <hr />
                        <>
                            {sectionData?.content?.map((val, idx) => (
                                <div key={idx}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <div>Navbar Item</div>
                                    <ToggleButton isChecked={val.fieldVisible} updateChecked={(e) => {changeChecked(e, "content", "fieldVisible", idx)}}/>
                                </div>
                                {"title" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="title" placeholder="Navbar Heading" className="field" value={val.title} onChange={(e) => {changeValue(e, "content", "title", idx)}} />
                                    </div>
                                ) : null}
                                {"orderNo" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="OrderNo" className="field" value={val.orderNo} onChange={(e) => {changeValue(e, "content", "orderNo", idx)}} />
                                    </div>
                                ) : null}
                                {"subField" in val === true ? (
                                    <>
                                    <div>Sub Navbar Items</div>
                                    {val.subField.map((subVal,kdx) => (
                                        <>
                                        <div className="edit-section" style={{justifyContent: 'space-between',
                                            flexDirection: 'row-reverse', alignItems: 'center'}}>
                                            <ToggleButton isChecked={subVal.fieldVisible} updateChecked={(e) => {changeChecked(e, "content", "subField", idx, "fieldVisible", kdx)}}/>
                                            <input type="text" name="title" placeholder="SubNavbar Heading" className="field" value={subVal.subFieldName} onChange={(e) => {changeValue(e, "content", "subField", idx, "subFieldName", kdx)}} 
                                                style={{width: '65%', height: 'fit-content'}}/>
                                        </div>
                                        </>
                                    ))}
                                    </>
                                ): null}
                                <hr />
                                </div>
                            ))}
                        </>
                    <div>
                        <button className={classes.saveBtn} 
                        onClick={() => {
                            props.updateData(sectionData, sectionData.sectionName);
                            props.changeModalStatus(false); props.changeToasterStatus(true)}}
                        >Save</button>
                    </div>
                </div>
                </Fade>
            </Modal>
        </div>
    )
}


const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(EditNavModal)
