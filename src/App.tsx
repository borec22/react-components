import React, {useState} from 'react';
import './App.css';
import {RatingType} from './components/ControlledRating/ControlledRating';
import {Select} from './components/Select/Select';
import {OnOff} from './components/OnOff/OnOff';

export type ItemType = {
   title: string
   value: any
}

export function App() {
   const [ratingValue, setRatingValue] = useState<RatingType>(0);
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
   const [isOn, setIsOn] = useState<boolean>(false);
   const [optionSelected, setOptionSelected] = useState<any>('2');
   const [optionSelected2, setOptionSelected2] = useState<any>('');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   const onClick2 = (value: any) => {
      setOptionSelected2(value);
   };



   return (
      <div className="App">
         <select style={{marginBottom: '20px'}}>
            <option value="1">Kiev</option>
            <option value="2">London</option>
            <option value="3">Paris</option>
         </select>
         <Select value={optionSelected} onChange={onClick} options={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Kiev'},
            {value: '3', title: 'San Francisco'},
            {value: '4', title: 'London'},
         ]}/>
         <hr/>
         <Select value={optionSelected2} onChange={onClick2} options={[
            {value: '1', title: 'Minsk'},
            {value: '2', title: 'Kiev'},
            {value: '3', title: 'San Francisco'},
            {value: '4', title: 'London'},
         ]}/>
         <hr/>
         <OnOff isOn={isOn} setIsOn={setIsOn}/>
      </div>
   );
}




