import React, {ChangeEvent, MouseEvent, useRef, useState} from 'react'
import {Story} from '@storybook/react/types-6-0';

export default {
   title: 'input'
}

export const UncontrolledInput = () => <input/>

export const ReactOnEveryChangeUncontrolledInput = () => {
   const [value, setValue] = useState('');

   const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

   return (
      <>
         <input onChange={onChange}/> - {value}
      </>
   );
}

export const ReactOnEveryChangeUncontrolledInputWithUseRef = () => {
   const [value, setValue] = useState('');

   const inputElement = useRef<HTMLInputElement>(null);
   const OnClickHandler = (e: MouseEvent) => {
      inputElement.current && setValue(inputElement.current.value);
   };

   return (
      <>
         <input ref={inputElement}/>
         <button onClick={OnClickHandler}>Get data from input</button>
         - {value}
      </>
   );
}

export const ControlledInputFixedValue = () => <input value=''/>

export const ControlledInput = () => {
   const [value, setValue] = useState<string>('');
   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

   return <input value={value} onChange={ onChangeHandler } />
}

export const ControlledCheckbox = () => {
   const [isChecked, setIsChecked] = useState<boolean>(true);

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setIsChecked(e.currentTarget.checked);

   return <input type='checkbox' checked={isChecked} onChange={onChangeHandler}/>
}

type OptionsType = 'sinbad' | 'rembo' | 'troya';

export const ControlledSelect = () => {
   const [value, setValue] = useState<string>('sinbad');

   const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value);

   return (
      <label>
         <span>Pick your favorite movie: </span>
         <select value={value} onChange={changeHandler}>
            <option value='sinbad'>Sinbad</option>
            <option value='rembo'>Rembo</option>
            <option value='troya'>Troya</option>
         </select>
      </label>
   );
}
