import {Select} from './Select';
import {useState} from 'react';
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
   title: 'select',
   component: Select
} as Meta;

export const DefaultSelect = () => {
   const [optionSelected, setOptionSelected] = useState<any>('Kiev');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   return <Select value={optionSelected} onClick={onClick} options={[
      {id: 1, value: 'Minsk'},
      {id: 2, value: 'Kiev'},
      {id: 3, value: 'San Francisco'},
      {id: 4, value: 'London'},
   ]} />
}