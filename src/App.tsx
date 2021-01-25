import React, {useState} from 'react';
import './App.css';
import {Select} from './components/Select/Select';
import {Clock} from './components/Clock/Clock';

export type ItemType = {
   title: string
   value: any
}

export function App() {
   /*const [ratingValue, setRatingValue] = useState<RatingType>(0);
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
   const [isOn, setIsOn] = useState<boolean>(false);
   const [optionSelected2, setOptionSelected2] = useState<any>('');*/
   // const [optionSelected, setOptionSelected] = useState<any>('2');



   return (
      <div className="App">
         <Clock title='Tokyo' datediff={9}/>
         <Clock title='London' datediff={-2}/>
         <Clock title='Ney York' datediff={-6}/>
         <Clock title='Kiev' datediff={0}/>
      </div>
   );
}




