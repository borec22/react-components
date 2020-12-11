import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {ControlledRating, RatingType} from './ControlledRating';

export default {
   title: 'ControlledRating stories',
   component: ControlledRating,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

export const EmptyRating = () => <ControlledRating value={0} setRatingValue={(rating) => { return rating; }} />

export const Rating1 = () => <ControlledRating value={1} setRatingValue={(rating) => { return rating; }} />
export const Rating2 = () => <ControlledRating value={2} setRatingValue={(rating) => { return rating; }} />
export const Rating3 = () => <ControlledRating value={3} setRatingValue={(rating) => { return rating; }} />
export const Rating4 = () => <ControlledRating value={4} setRatingValue={(rating) => { return rating; }} />
export const Rating5 = () => <ControlledRating value={5} setRatingValue={(rating) => { return rating; }} />
export const ChangingRating = () => {
   const [ratingValue, setRatingValue] = useState<RatingType>(0);

   return <ControlledRating value={ratingValue} setRatingValue={setRatingValue} />;
}


// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

/*export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};*/

/*export const Secondary = Template.bind({});
Secondary.args = {
   label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
   size: 'large',
   label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
   size: 'small',
   label: 'Button',
};*/
