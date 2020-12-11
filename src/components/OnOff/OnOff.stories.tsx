import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
   title: 'OnOff stories',
   component: OnOff,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

const callback = action('on or of clicked');
export const OnMode = () => <OnOff isOn={true} setIsOn={callback} />
export const OffMode = () => <OnOff isOn={false} setIsOn={callback} />
export const ModeChanging = () => {
   const [value, setValue] = useState<boolean>(false);

   return <OnOff isOn={value} setIsOn={setValue} />
}


// export const ChangingRating = () => {
//    const [ratingValue, setRatingValue] = useState<RatingType>(0);
//
//    return <ControlledRating value={ratingValue} setRatingValue={setRatingValue} />;
// }


