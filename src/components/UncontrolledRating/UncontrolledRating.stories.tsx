// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';

export default {
   title: 'UncontrolledRating stories',
   component: UncontrolledRating,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

export const EmptyRating = () => <UncontrolledRating value={0} />

export const Rating1 = () => <UncontrolledRating value={1} />
export const Rating2 = () => <UncontrolledRating value={2} />
export const Rating3 = () => <UncontrolledRating value={3} />
export const Rating4 = () => <UncontrolledRating value={4} />
export const Rating5 = () => <UncontrolledRating value={5} />

