import classes from '../ControlledAccordion.module.css';
import React from 'react';

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
}

export const ControlledAccordionTitle = React.memo(function (props: AccordionTitlePropsType) {

   return <>
      <h3 onClick={() => props.setAccordionCollapsed()} className={classes.accordionTitle}>{props.title}</h3>
   </>
});