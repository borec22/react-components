import classes from '../Accordion.module.css';
import React from 'react';

type AccordionTitlePropsType = {
   title: string
   onCollapsedChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
   const onHandleTitleClick = () => {
      props.onCollapsedChange();
   }

   return <>
      <h3 onClick={onHandleTitleClick} className={classes.accordionTitle}>{props.title}</h3>
   </>
}