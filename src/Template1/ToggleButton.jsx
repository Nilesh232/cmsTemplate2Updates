import React from "react";
import classes from './css/ToggleButton.module.css';

export default function ToggleButton({isChecked, updateChecked}) {
  
  return (
    <div>
      <div className={classes.togglebuttoncover}>
        <div className={classes.buttoncover}>
          <div className={classes.button+ ' ' +classes.r}>
            <input type="checkbox" className={classes.checkbox} checked={isChecked} onChange={(e) => {updateChecked(e)}}/>
            <div className={classes.knobs}></div>
            <div className={classes.layer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
