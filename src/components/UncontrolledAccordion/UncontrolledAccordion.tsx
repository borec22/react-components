import React, {useState} from 'react';
import {UncontrolledAccordionTitle} from './UncontrolledAccordionTitle/UncontrolledAccordionTitle';

type AccordionPropsType = {
   titleValue: string,
   collapsed: boolean
   setAccordionCollapsed: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {

   return <div>
      <UncontrolledAccordionTitle title={props.titleValue}
                                  setAccordionCollapsed={props.setAccordionCollapsed}/>
      { !props.collapsed && <AccordionBody/> }
   </div>
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
}