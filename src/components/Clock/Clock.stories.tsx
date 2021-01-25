import React from 'react';
import {Clock} from './Clock';


export default {
   title: 'Clock stories',
   component: Clock
}

export const BaseExample = () => {

   return <Clock title='Kiev' datediff={0}/>
}