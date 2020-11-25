import classes from '../UncontrolledAccordion.module.css';
import React from 'react';

type AccordionTitlePropsType = {
   title: string
   setAccordionCollapsed: () => void
}

export function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {

   return <>
      <h3 onClick={props.setAccordionCollapsed} className={classes.accordionTitle}>{props.title}</h3>
   </>
}