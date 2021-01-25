import React, {useState} from 'react';
import {Star} from './Star/Star';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;
type PropsType = {
   value: RatingType
   setRatingValue: (value: RatingType) => void
}

export const ControlledRating =  React.memo(function (props: PropsType) {
   return (
      <div>
         <Star selected={props.value > 0}
               setRatingValue={() => { props.setRatingValue(1) }}/>
         <Star selected={props.value > 1}
               setRatingValue={() => { props.setRatingValue(2) }}/>
         <Star selected={props.value > 2}
               setRatingValue={() => { props.setRatingValue(3) }}/>
         <Star selected={props.value > 3}
               setRatingValue={() => { props.setRatingValue(4) }}/>
         <Star selected={props.value > 4}
               setRatingValue={() => { props.setRatingValue(5) }}/>
      </div>
   );
});

