import React, {useState} from 'react';
import './App.css';
import {ControlledRating, RatingType} from './components/ControlledRating/ControlledRating';
import {ControlledAccordion} from './components/ControlledAccordion/ControlledAccordion';
import {Select} from './components/Select/Select';

export type ItemType = {
   title: string
   value: any
}

export function App() {
   const [ratingValue, setRatingValue] = useState<RatingType>(0);
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
   const [isOn, setIsOn] = useState<boolean>(false);
   const [optionSelected, setOptionSelected] = useState<any>('Kiev');

   const onClick = (value: any) => {
      setOptionSelected(value);
   };

   return (
      <div className="App">
         <Select value={optionSelected} onClick={onClick} options={[
            {id: 1, value: 'Minsk'},
            {id: 2, value: 'Kiev'},
            {id: 3, value: 'San Francisco'},
            {id: 4, value: 'London'},
         ]}/>
         {/*<ControlledAccordion titleValue='List of books'
                              collapsed={accordionCollapsed}
                              setAccordionCollapsed={()=> setAccordionCollapsed(!accordionCollapsed)}
                              onItemClick={onItemClick}
                              items={
                                 [{value: 1, title: 'history'},
                                 {value: 2, title: 'math'},
                                 {value: 3, title: 'ukraine language'},
                                 {value: 4, title: 'literature'},]
                              }/>*/}
      </div>
   );
}




