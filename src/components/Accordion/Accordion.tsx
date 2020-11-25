import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle/AccordionTitle';

type AccordionPropsType = {
   titleValue: string,
   collapsed?: boolean
}

export function Accordion(props: AccordionPropsType) {
   const [collapsed, setCollapsed] = useState(props.collapsed);
   const handleCollapsedCallback = () => {
      setCollapsed(!collapsed);
   }

   return <div>
      <AccordionTitle title={props.titleValue}
                      onCollapsedChange={handleCollapsedCallback}/>
      { !collapsed && <AccordionBody/> }
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