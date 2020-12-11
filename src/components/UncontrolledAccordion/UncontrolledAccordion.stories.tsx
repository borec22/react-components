import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
   title: 'Uncontrolled Accordion stories',
   component: UncontrolledAccordion,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

export const CollapsedMode = () => <UncontrolledAccordion titleValue='Our accordion' collapsed={true} />
export const UncollapsedMode = () => <UncontrolledAccordion titleValue='Our accordion' collapsed={false} />



