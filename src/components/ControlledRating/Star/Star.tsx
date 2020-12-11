import classes from '../ControlledRating.module.css';
import React from 'react';

type StarType = {
   selected: boolean
   setRatingValue: () => void
}

export function Star(props: StarType) {
   return (
      <span className={classes.star} onClick={props.setRatingValue}>
            {props.selected ? <b> star </b> : ' star '}
      </span>
   );
}