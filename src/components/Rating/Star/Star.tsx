import classes from '../Rating.module.css';
import React from 'react';
import {RatingType} from '../Rating';

type StarType = {
   selected: boolean
   setRatingValue: (value: RatingType) => void
   ratingValue: RatingType
}

export function Star(props: StarType) {
   const handleOnStarClick = () => {
      props.setRatingValue(props.ratingValue);
   }

   return (
      <span className={classes.star} onClick={handleOnStarClick}>
            {props.selected ? <b> star </b> : ' star '}
      </span>
   );
}