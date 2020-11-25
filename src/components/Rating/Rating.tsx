import React, {useState} from 'react';
import {Star} from './Star/Star';

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;
type PropsType = {
   value?: RatingType
}

export function Rating(props: PropsType) {
   const [ratingValue, setRatingValue] = useState<RatingType>(props.value || 0);

   return (
      <div>
         <Star selected={ratingValue > 0}
               setRatingValue={setRatingValue}
               ratingValue={1} />
         <Star selected={ratingValue > 1}
               setRatingValue={setRatingValue}
               ratingValue={2}/>
         <Star selected={ratingValue > 2}
               setRatingValue={setRatingValue}
               ratingValue={3}/>
         <Star selected={ratingValue > 3}
               setRatingValue={setRatingValue}
               ratingValue={4}/>
         <Star selected={ratingValue > 4}
               setRatingValue={setRatingValue}
               ratingValue={5}/>
      </div>
   );
}

