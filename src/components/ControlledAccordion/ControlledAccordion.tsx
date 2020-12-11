import React from 'react';
import {ControlledAccordionTitle} from './ControlledAccordionTitle/ControlledAccordionTitle';
import {ItemType} from '../../App';

type AccordionPropsType = {
   titleValue: string,
   collapsed: boolean
   setAccordionCollapsed: () => void
   items: ItemType[]
   onItemClick: (value: any) => void
}

export function ControlledAccordion(props: AccordionPropsType) {

   return <div>
      <ControlledAccordionTitle title={props.titleValue}
                                setAccordionCollapsed={props.setAccordionCollapsed}/>
      {!props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
   </div>
}

type AccordionBodyPropsType = {
   items: ItemType[]
   onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
   return (
      <ul>
         {props.items.map((i, index) => <li key={index} onClick={()=> {props.onItemClick(i.value)}}>{i.title}</li>)}
      </ul>
   );
}