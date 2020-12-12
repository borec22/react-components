import {Select} from './Select';
import {useState} from 'react';
import React from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
   title: 'select',
   component: Select
} as Meta;

export const DefaultSelect = () => {
   const [optionSelected, setOptionSelected] = useState<any>('2');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   return <Select value={optionSelected} onChange={onClick} options={[
      {value: '1', title: 'Minsk'},
      {value: '2', title: 'Kiev'},
      {value: '3', title: 'San Francisco'},
      {value: '4', title: 'London'},
   ]} />
}

export const WithoutValue = () => {
   const [optionSelected, setOptionSelected] = useState<any>('');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   return <Select value={optionSelected} onChange={onClick} options={[
      {value: '1', title: 'Minsk'},
      {value: '2', title: 'Kiev'},
      {value: '3', title: 'San Francisco'},
      {value: '4', title: 'London'},
   ]} />
}