import React, {useState} from 'react';
import './App.css';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {RatingType} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';

export function App() {
   const [ratingValue, setRatingValue] = useState<RatingType>(0);
   const [accordionCollapsed, setAccordionCollapsed] =  useState<boolean>(false);
   const [isOn, setIsOn] = useState<boolean>(false);

   return (
      <div className="App">
         <OnOff isOn={isOn} setIsOn={setIsOn}/>
      </div>
   );
}

