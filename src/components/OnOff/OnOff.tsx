import React, {useState} from 'react';
import classes from './OnOff.module.css';

type PropsType = {
   isOn: boolean
   setIsOn: (isOn: boolean) => void
}

export function OnOff(props: PropsType) {

   const handleOn = () => {
      props.setIsOn(true);
   }
   const handleOff = () => {
      props.setIsOn(false);
   }

   return (
      <div className={classes.container}>
         <div className={`${classes.box} ${props.isOn && classes.green}`} onClick={handleOn}> ON </div>
         <div className={`${classes.box} ${!props.isOn && classes.red}`} onClick={handleOff}> OFF </div>
         <div className={`${classes.siren} ${props.isOn ? classes.green : classes.red}`}> </div>
      </div>
   );
}