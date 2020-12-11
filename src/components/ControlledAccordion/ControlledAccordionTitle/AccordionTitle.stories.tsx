import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {ControlledAccordionTitle} from './ControlledAccordionTitle';
import {action} from '@storybook/addon-actions';

export default {
   title: 'AccordionTitle stories',
   component: ControlledAccordionTitle,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta;

const callback = action('Title collapsed or uncollapsed after clicked. ');

export const ReactJsCollapsedMode = () => <ControlledAccordionTitle title='ReactJS'
                                                             setAccordionCollapsed={callback}/>
export const JsUncollapsedMode = () => <ControlledAccordionTitle title='JS'
                                                               setAccordionCollapsed={callback}/>



