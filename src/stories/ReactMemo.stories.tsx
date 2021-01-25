import React, {useState} from 'react';
import {OnOff} from '../components/OnOff/OnOff';
import {ControlledRating, RatingType} from '../components/ControlledRating/ControlledRating';

export default {
   title: 'Example/React.memo demo'
}

export const Example1 = () => {
   const [ratingValue, setRatingValue] = useState<RatingType>(0);

   const [isOn, setIsOn] = useState<boolean>(false);

   return (
      <div>
         <OnOff isOn={isOn} setIsOn={setIsOn} />
         <ControlledRating value={ratingValue} setRatingValue={setRatingValue}/>
      </div>
   );
}