import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { baseURL, bucketName } from '../data/applicationConstant';


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
  }),
);

function AddSectionModal(props) {
    console.log(props);

    const classes = useStyles();
    let obj = JSON.parse(JSON.stringify(props.dummy));

    const [sectionObj, setSectionObj] = React.useState(obj);
    const [sectionData, setSectionData] = React.useState(props.data);

    const changeValue = (e, sLevel, kdx=null) => {
        let tempState = JSON.parse(JSON.stringify(sectionObj))
        const {name, value} = e.target;
        if(kdx != null) {
            tempState[sLevel.toString()][kdx] = value;
        } else {
            tempState[sLevel.toString()] = value;
        }
        setSectionObj(tempState);
    }

    const addText = (value, sLevel) => {
        let tempState = JSON.parse(JSON.stringify(sectionObj));
        tempState[sLevel.toString()].push(value);
        setSectionObj(tempState);
    }

    const updateContentData = () => {
        sectionData['content'].push(sectionObj);
        props.updateData(sectionData, sectionData.sectionName);
    }

    const deleteContentData = (kdx, sLevel) => {
        let tempState = JSON.parse(JSON.stringify(sectionObj));
        tempState[sLevel.toString()].splice(kdx, 1);
        setSectionObj(tempState);
    }

    
    const [file, setFile] = React.useState(null);
    const [error, setError] = React.useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e, sLevel) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
        getS3Link(selected, sLevel);
    } else {
        setFile(null);
        setError('Please select an image file (png or jpg)');
    }
    };

    const getS3Link = async (file, sLevel) => {
        let formData = new FormData();
        formData.append("data", file);
        formData.append("bucket", bucketName);
        formData.append("fileName", sectionData.config.sectionTitle+'_'+sectionData.content.length);

        await fetch(baseURL + '/image', {
        "method": "POST",
        "header":{
          "Content-Type": "multipart/form-data"
        },
        "body": formData
      })
      .then((response) => response.json())
      .then((data) => {
          if(!!data === true && !!data.imagePath === true) {
              let tempState = JSON.parse(JSON.stringify(sectionObj));
              tempState[sLevel.toString()] = data.imagePath;
              setSectionObj(tempState)
          }
        console.log(data)
        }).catch((e) => {
        alert(e);
        })
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={() => {props.changeAddContentModalStatus(false)}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                style={{width: '100%'}}
            >
                <Fade in={props.open}>
                <div className={classes.paper + ' ' + classes.modalSize}>
                    <h3 id="transition-modal-title">Add Section Content</h3>
                    <hr />
                    <div>
                    {"imgPath" in sectionObj === true ? (
                        <>
                        <div className="edit-section" style={{'flexDirection': 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <input type="text" name="title" placeholder="Image Path" className="field" value={sectionObj.imgPath} onChange={(e) => {changeValue(e, "imgPath")}} disabled style={{width: '65%'}}/>
                            <input type="file" onChange={(e) => {handleChange(e, 'imgPath')}} style={{float: 'right'}}/>
                        </div>
                        {/* <div className="output">
                            { error && <div className="error">{ error }</div>}
                            { file && <div>{ file.name }</div> }
                            { file && (
                                <>
                                <motion.div className="progress-bar"
                                initial={{ width: 0 }}
                                animate={{ width: progress + '%' }}
                                ></motion.div>
                                </>
                            ) }
                        </div> */}
                        </>
                    ): null}
                    {"title" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="title" placeholder="Card Heading" className="field" value={sectionObj.title} onChange={(e) => {changeValue(e, "title")}} />
                        </div>
                    ) : null}
                    {"name" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Card Name" className="field" value={sectionObj.name} onChange={(e) => {changeValue(e, "name")}} />
                        </div>
                    ) : null}
                    {"icon" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Card Icon" className="field" value={sectionObj.icon} onChange={(e) => {changeValue(e, "icon")}} />
                        </div>
                    ) : null}
                    {"date" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Date" className="field" value={sectionObj.date} onChange={(e) => {changeValue(e, "date")}} />
                        </div>
                    ) : null}
                    {"month" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Month" className="field" value={sectionObj.month} onChange={(e) => {changeValue(e, "month")}} />
                        </div>
                    ) : null}
                    {"time" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Time" className="field" value={sectionObj.time} onChange={(e) => {changeValue(e, "time")}} />
                        </div>
                    ) : null}
                    {"location" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="Location" className="field" value={sectionObj.location} onChange={(e) => {changeValue(e, "location")}} />
                        </div>
                    ) : null}
                    {"orderNo" in sectionObj === true ? (
                        <div className="edit-section">
                            <input type="text" name="name" placeholder="OrderNo" className="field" value={sectionObj.orderNo} onChange={(e) => {changeValue(e, "orderNo")}} />
                        </div>
                    ) : null}
                    {"text" in sectionObj === true ? (
                        <div className="edit-section">
                        {sectionObj.text.map((contentInfo, kdx) => (
                            <>
                                <textarea key={kdx} style={{marginTop: '1rem'}} type="text" name="text" placeholder="Card Description" className="field" value={contentInfo} onChange={(e) => {changeValue(e, "text", kdx)}}></textarea>
                                <div>
                                <div
                                className="delete-icon-edit"
                                onClick={() => {
                                    deleteContentData(kdx, "text")
                                }}
                                style={{float:'right'}}
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    class="bi bi-trash"
                                    viewBox="0 0 18 18"
                                    >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                            fill-rule="evenodd"
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                    </svg>
                                </div>
                                </div>
                            </>
                        ))}
                        <div
                        className="plus-icon-edit"
                        onClick={() => {
                        addText("", "text");
                        }}
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            class="bi bi-plus"
                            viewBox="0 0 16 16"
                            >
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                        </div>
                    ) : null}

                                <hr />
                                </div>
                    <div>
                        <button className={classes.saveBtn} 
                        onClick={() => {
                            // props.updateData(sectionData, sectionData.sectionName, sectionObj);
                            updateContentData();
                            props.changeAddContentModalStatus(false); props.changeToasterStatus(true)}}
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


export default connect(mapStateToProps,mapDispatchToProps)(AddSectionModal)
