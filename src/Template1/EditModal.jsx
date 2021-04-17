import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { updateData } from '../Services/Actions/actions';
import ToggleButton from './ToggleButton';

// import { motion } from 'framer-motion';
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

function EditModal(props) {
    console.log(props);

    const classes = useStyles();
    const selectedId = props.selectedId;

    const [sectionData, setSectionData] = React.useState(props.data);

    const changeValue = (e, fLevel, sLevel, idx = null, kdx = null) => {
        let tempState = JSON.parse(JSON.stringify(sectionData))
        const {name, value} = e.target;
        if(idx != null && kdx == null) {
            tempState[fLevel.toString()][idx][sLevel.toString()] = value;
        } else if(idx != null && kdx != null) {
            tempState[fLevel.toString()][idx][sLevel.toString()][kdx] = value;
        } else {
            tempState[fLevel.toString()][sLevel.toString()] = value;
        }
        setSectionData(tempState)
    }

    const changeChecked = (e) => {
        let tempState = JSON.parse(JSON.stringify(sectionData))
        console.log(e);
        tempState['config']['sectionVisible'] = e.target.checked;
        setSectionData(tempState)
    }

    const addText = (value, fLevel, sLevel, idx,) => {
        let tempState = JSON.parse(JSON.stringify(sectionData));
        tempState[fLevel.toString()][idx][sLevel.toString()].push(value);
        setSectionData(tempState);
    }

    const deleteContentData = (fLevel, sLevel, idx, kdx) => {
        if(kdx > 1) {
            let tempState = JSON.parse(JSON.stringify(sectionData));
            tempState[fLevel.toString()][idx][sLevel.toString()].splice(kdx, 1);
            setSectionData(tempState);
        } else {
            alert('Minimum one description box required');
        }
    }




    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e, fLevel, sLevel, idx=null) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
        getS3Link(selected, fLevel, sLevel, idx);
    } else {
        setFile(null);
        e.target.value = null;
        alert('Please select an image file (png or jpg)');
    }
    };

    const getS3Link = async (file, fLevel, sLevel, idx) => {
        let formData = new FormData();
        formData.append("data", file);
        formData.append("bucket", bucketName);
        if(idx != null) {
            formData.append("fileName", sectionData.config.sectionTitle+'_'+idx);
        } else if(idx == null) {
            formData.append("fileName", sectionData.config.sectionTitle+'_0');
        }

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
              let tempState = JSON.parse(JSON.stringify(sectionData));
              if(idx != null) {
                  tempState[fLevel.toString()][idx][sLevel.toString()] = data.imagePath;
              } else if(idx == null) {
                tempState[fLevel.toString()][sLevel.toString()] = data.imagePath;
              }
              setSectionData(tempState)
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
                    <div className={classes.configBlock}>
                    <span className={classes.sectionText}>Section Visible</span>
                        <ToggleButton isChecked={sectionData.config.sectionVisible} updateChecked={changeChecked}/>
                    </div>
                    
                    {"sectionImgPath" in sectionData.config === true ? (
                        <>
                        <div className="edit-section" style={{'flexDirection': 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <input type="text" name="title" placeholder="Section image Path" className="field" value={sectionData.config.sectionImgPath} onChange={(e) => {changeValue(e, "config", "sectionImgPath")}} disabled style={{width: '65%'}}/>
                            <input type="file" onChange={(e) => {handleChange(e, "config", "sectionImgPath")}} style={{float: 'right'}}/>
                        </div>
                        <div className="output">
                            { error && <div className="error">{ error }</div>}
                            {/* { file && <div>{ file.name }</div> }
                            { file && (
                                <>
                                <motion.div className="progress-bar"
                                initial={{ width: 0 }}
                                animate={{ width: progress + '%' }}
                                ></motion.div>
                                </>
                            ) } */}
                        </div>
                        </>
                    ) : null }
                    {"sectionTitle" in sectionData.config === true ? (
                        <div className="edit-section">
                            <input type="text" name="sectionTitle" placeholder="Section Heading" className="field"
                            value={sectionData.config.sectionTitle} 
                            onChange={(e) => {changeValue(e, "config", "sectionTitle")}} 
                            />
                        </div>
                    ) : null }
                    {"description"  in sectionData.config === true ? (
                        <div className="edit-section">
                            <input type="text" name="sectionDes" placeholder="Section Description" className="field"
                            value={sectionData.config.description} 
                            onChange={(e) => {changeValue(e, "config", "description")}} 
                            />
                        </div>
                    ) : null}
                    {"subSectionTitle"  in sectionData.config === true ? (
                        <div className="edit-section">
                            <input type="text" name="subSectionTitle" placeholder="SubSection Title" className="field"
                            value={sectionData.config.subSectionTitle} 
                            onChange={(e) => {changeValue(e, "config", "subSectionTitle")}} 
                            />
                        </div>
                    ) : null}
                    <hr />
                    {!!selectedId?.toString() === true ? (
                        <>
                            {sectionData?.content?.map((val, idx) => (
                                <>
                                {selectedId === idx ? (
                                    <>
                                        <div key={idx}>
                                        {"imgPath" in val === true ? (
                                            <>
                                            <div className="edit-section" style={{'flexDirection': 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <input type="text" name="title" placeholder="Image Path" className="field" value={val.imgPath} onChange={(e) => {changeValue(e, "content", "imgPath", idx)}} disabled style={{width: '65%'}}/>
                                                <input type="file" onChange={(e) => {handleChange(e, 'content', 'imgPath', idx)}} style={{float: 'right'}}/>
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
                                        {"title" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="title" placeholder="Card Heading" className="field" value={val.title} onChange={(e) => {changeValue(e, "content", "title", idx)}} />
                                            </div>
                                        ) : null}
                                        {"name" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="Card Name" className="field" value={val.name} onChange={(e) => {changeValue(e, "content", "name", idx)}} />
                                            </div>
                                        ) : null}
                                        {"icon" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="Card Icon" className="field" value={val.icon} onChange={(e) => {changeValue(e, "content", "icon", idx)}} />
                                            </div>
                                        ) : null}
                                        {"date" in val === true ? (
                                        <div className="edit-section">
                                            <input type="text" name="name" placeholder="Date" className="field" value={val.date} onChange={(e) => {changeValue(e, "content", "date", idx)}} />
                                        </div>
                                        ) : null}
                                        {"month" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="Month" className="field" value={val.month} onChange={(e) => {changeValue(e, "content", "month", idx)}} />
                                            </div>
                                        ) : null}
                                        {"time" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="Time" className="field" value={val.time} onChange={(e) => {changeValue(e, "content", "time", idx)}} />
                                            </div>
                                        ) : null}
                                        {"location" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="Location" className="field" value={val.location} onChange={(e) => {changeValue(e, "content", "location", idx)}} />
                                            </div>
                                        ) : null}
                                        {"orderNo" in val === true ? (
                                            <div className="edit-section">
                                                <input type="text" name="name" placeholder="OrderNo" className="field" value={val.orderNo} onChange={(e) => {changeValue(e, "content", "orderNo", idx)}} />
                                            </div>
                                        ) : null}
                                        {"text" in val === true ? (
                                            <div className="edit-section">
                                            {val.text.map((contentInfo, kdx) => (
                                                <>
                                                    <textarea style={{marginTop: '1rem'}} key={kdx} type="text" name="text" placeholder="Card Description" className="field" value={contentInfo} onChange={(e) => {changeValue(e, "content", "text", idx, kdx)}}></textarea>
                                                    <div>
                                                    <div
                                                        className="delete-icon-edit"
                                                        onClick={() => {
                                                            deleteContentData("content", "text", idx, kdx)
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
                                                    {kdx === val.text.length-1 ? (
                                                        <>

                                                            <div
                                                    className="plus-icon-edit"
                                                    onClick={() => {
                                                    addText("", "content", "text", idx);
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
                                                        </>
                                                    ) : null}

                                                    </div>
                                                </>
                                            ))}
                                            {/* <div
                                            className="plus-icon-edit"
                                            onClick={() => {
                                            addText("", "content", "text", idx);
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
                                            </div> */}
                                            </div>

                                        ) : null}
                                        <hr />
                                        </div>
                                    </>

                                ) :  null}
                                </>
                            ))}
                        </>
                    ) : (
                        <>
                            {sectionData?.content?.map((val, idx) => (
                                <div key={idx}>
                                {"imgPath" in val === true ? (
                                    <>
                                    <div className="edit-section" style={{'flexDirection': 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                        <input type="text" name="title" placeholder="Image Path" className="field" value={val.imgPath} onChange={(e) => {changeValue(e, "content", "imgPath", idx)}} disabled style={{width: '65%'}}/>
                                        <input type="file" onChange={(e) => {handleChange(e, 'content', 'imgPath', idx)}} style={{float: 'right'}}/>
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
                                {"title" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="title" placeholder="Card Heading" className="field" value={val.title} onChange={(e) => {changeValue(e, "content", "title", idx)}} />
                                    </div>
                                ) : null}
                                {"name" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Card Name" className="field" value={val.name} onChange={(e) => {changeValue(e, "content", "name", idx)}} />
                                    </div>
                                ) : null}
                                {"icon" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Card Icon" className="field" value={val.icon} onChange={(e) => {changeValue(e, "content", "icon", idx)}} />
                                    </div>
                                ) : null}
                                {"date" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Date" className="field" value={val.date} onChange={(e) => {changeValue(e, "content", "date", idx)}} />
                                    </div>
                                ) : null}
                                {"month" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Month" className="field" value={val.month} onChange={(e) => {changeValue(e, "content", "month", idx)}} />
                                    </div>
                                ) : null}
                                {"time" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Time" className="field" value={val.time} onChange={(e) => {changeValue(e, "content", "time", idx)}} />
                                    </div>
                                ) : null}
                                {"location" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="Location" className="field" value={val.location} onChange={(e) => {changeValue(e, "content", "location", idx)}} />
                                    </div>
                                ) : null}
                                {"orderNo" in val === true ? (
                                    <div className="edit-section">
                                        <input type="text" name="name" placeholder="OrderNo" className="field" value={val.orderNo} onChange={(e) => {changeValue(e, "content", "orderNo", idx)}} />
                                    </div>
                                ) : null}
                                {"text" in val === true ? (
                                    <div className="edit-section">
                                    {val.text.map((contentInfo, kdx) => (
                                        <>
                                            <textarea style={{marginTop: '1rem'}} key={kdx} type="text" name="text" placeholder="Card Description" className="field" value={contentInfo} onChange={(e) => {changeValue(e, "content", "text", idx, kdx)}}></textarea>
                                            <div>
                                            <div
                                            className="delete-icon-edit"
                                            onClick={() => {
                                                deleteContentData("content", "text", idx, kdx)
                                            }}
                                            style={{float: 'right'}}
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

                                        {kdx === val.text.length-1 ? (
                                                        <>

                                                            <div
                                                    className="plus-icon-edit"
                                                    onClick={() => {
                                                    addText("", "content", "text", idx);
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
                                                        </>
                                                    ) : null}


                                        </div>
                                        </>
                                    ))}
                                    {/* <div
                                    className="plus-icon-edit"
                                    onClick={() => {
                                    addText("", "content", "text", idx);
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
                                    </div> */}
                                    </div>
                                ) : null}

                                <hr />
                                </div>
                            ))}
                        </>
                    )}
                    <div>
                        <button className={classes.saveBtn} 
                        onClick={() => {
                            props.updateData(sectionData, sectionData.sectionName);
                            // props.changeData(sectionData, sectionData.sectionName); 
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
//   changeData:(data, sectionName)=>dispatch(updateData(data, sectionName)),
})


export default connect(mapStateToProps,mapDispatchToProps)(EditModal)
