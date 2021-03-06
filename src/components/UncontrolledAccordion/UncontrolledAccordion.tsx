import React, {useState} from 'react';
import {UncontrolledAccordionTitle} from './UncontrolledAccordionTitle/UncontrolledAccordionTitle';

type AccordionPropsType = {
   titleValue: string,
   collapsed?: boolean
}

export const UncontrolledAccordion = React.memo(function UncontrolledAccordion(props: AccordionPropsType) {
   const [collapsed, setCollapsed] = useState(props.collapsed);
   const handleCollapsedCallback = () => {
      setCollapsed(!collapsed);
   }

   return <div>
      <UncontrolledAccordionTitle title={props.titleValue}
                                  onCollapsedChange={handleCollapsedCallback}/>
      { !collapsed && <AccordionBody/> }
   </div>
});

const AccordionBody = React.memo(function () {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
});