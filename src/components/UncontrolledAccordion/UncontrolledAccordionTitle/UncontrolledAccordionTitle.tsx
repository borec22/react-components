import classes from '../UncontrolledAccordion.module.css';
import React from 'react';

type AccordionTitlePropsType = {
   title: string
   onCollapsedChange: () => void
}

export function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
   const onHandleTitleClick = () => {
      props.onCollapsedChange();
   }

   return <>
      <h3 onClick={onHandleTitleClick} className={classes.accordionTitle}>{props.title}</h3>
   </>
}