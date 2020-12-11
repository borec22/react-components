import classes from '../ControlledAccordion.module.css';
import React from 'react';

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
}

export function ControlledAccordionTitle(props: AccordionTitlePropsType) {

   return <>
      <h3 onClick={() => props.setAccordionCollapsed()} className={classes.accordionTitle}>{props.title}</h3>
   </>
}