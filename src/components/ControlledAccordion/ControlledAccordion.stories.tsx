import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta} from '@storybook/react/types-6-0';
import {ControlledAccordion} from './ControlledAccordion';
import {action} from '@storybook/addon-actions';

export default {
   title: 'ControlledAccordion stories',
   component: ControlledAccordion,
   argTypes: {
      backgroundColor: {control: 'color'},
   },
} as Meta;

const callback = action('The body of Accordion have fired');
const callbackClick = action('There was a click on item!!!!');

export const UsersCollapsed = () => <ControlledAccordion titleValue='Users'
                                                         collapsed={true}
                                                         setAccordionCollapsed={callback}
                                                         onItemClick={callbackClick}
                                                         items={[]}/>
export const MusicsUncollapsed = () => <ControlledAccordion titleValue='Top songs of 2020'
                                                            collapsed={false}
                                                            setAccordionCollapsed={callback}
                                                            onItemClick={callbackClick}
                                                            items={[
                                                               {value: 1, title: 'Shame Shame'},
                                                               {value: 2, title: 'iPhone'},
                                                               {value: 3, title: 'Frontline'},
                                                               {value: 4, title: 'Both Of Us'}
                                                            ]}/>
export const MusicsChangingCollapsed = () => {
   const [value, setValue] = useState<boolean>(true);

   return <ControlledAccordion titleValue='Top songs of 2020'
                               collapsed={value}
                               setAccordionCollapsed={() => {
                                  setValue(!value);
                               }}
                               onItemClick={callbackClick}
                               items={[
                                  {value: 1, title: 'Shame Shame'},
                                  {value: 2, title: 'iPhone'},
                                  {value: 3, title: 'Frontline'},
                                  {value: 4, title: 'Both Of Us'}
                               ]}/>
}



