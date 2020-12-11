// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import React, {useState} from 'react';
import {Star} from './Star';
import {action} from '@storybook/addon-actions';
import {RatingType} from '../UncontrolledRating';

export default {
   title: 'Star stories',
   component: Star,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

export const SelectedStar = () => <Star selected={true} setRatingValue={action('Star have been selected or unselected after clicked')} />

export const UnselectedStar = () => <Star selected={false} setRatingValue={action('Star have been selected or unselected after clicked')} />

export const StarChangingSelected = () => {
   const [ratingValue, setRatingValue] = useState<RatingType>(2);
   return <Star selected={ratingValue > 2} setRatingValue={() => {setRatingValue(3)}} />
}

