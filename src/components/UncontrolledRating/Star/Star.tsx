import classes from '../UncontrolledRating.module.css';
import React, {MouseEvent} from 'react';

type StarType = {
   selected: boolean
   setRatingValue: () => void
}

export const Star = React.memo(function (props: StarType) {
   const handleOnStarClick = (e: MouseEvent) => {
      props.setRatingValue();
   }

   return (
      <span className={classes.star} onClick={handleOnStarClick}>
            {props.selected ? <b> star </b> : ' star '}
      </span>
   );
});